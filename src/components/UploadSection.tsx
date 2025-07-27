import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon, X, Camera, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = useCallback((file: File) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPG, PNG, or HEIC image.",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB.",
        variant: "destructive"
      });
      return;
    }

    setSelectedFile(file);
    setPhotoName(file.name.split('.')[0]);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setPhotoName("");
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please select an image to analyze.",
        variant: "destructive"
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms not accepted",
        description: "Please accept the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Simulate API call - replace with actual n8n webhook
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "Analysis complete!",
        description: "Your photo has been analyzed successfully.",
      });
      
      // Here you would display the results
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="upload" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upload Your <span className="text-red-600">Photo</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get professional AI feedback in seconds
            </p>
          </div>

          <Card className="card-gradient p-8">
            {/* Upload Zone */}
            <div
              className={`upload-zone p-12 text-center cursor-pointer mb-8 ${
                isDragging ? 'border-primary scale-105' : ''
              } ${selectedFile ? 'border-accent/50' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              {previewUrl ? (
                <div className="relative inline-block">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-w-full max-h-64 rounded-lg shadow-lg"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 rounded-full w-8 h-8 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                                <div className="w-20 h-20 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto">
                <Upload className="h-10 w-10 text-red-600" />
              </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Drag & drop your photo here
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      or click to browse your files
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, HEIC up to 10MB
                    </p>
                  </div>
                </div>
              )}
            </div>

            <input
              id="file-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
            />

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Get notified when your analysis is ready
                </p>
              </div>
              
              <div>
                <Label htmlFor="photo-name">Photo Name (optional)</Label>
                <Input
                  id="photo-name"
                  placeholder="My awesome photo"
                  value={photoName}
                  onChange={(e) => setPhotoName(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2 mb-8">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-red-600 hover:underline">
                  terms and conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-red-600 hover:underline">
                  privacy policy
                </a>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              size="lg"
              className="btn-hero w-full"
              onClick={handleSubmit}
              disabled={!selectedFile || !acceptTerms || isUploading}
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Analyzing Your Photo...
                </>
              ) : (
                <>
                  <Camera className="h-5 w-5 mr-2" />
                  Get AI Critique
                </>
              )}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;