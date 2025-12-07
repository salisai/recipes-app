"use client";

import { useState, useRef } from "react";
import { Upload, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
    onImageSelected: (file: File) => void;
    selectedImage: File | null;
    onClear: () => void;
}

export function ImageUpload({ onImageSelected, selectedImage, onClear }: ImageUploadProps) {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onImageSelected(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageSelected(e.target.files[0]);
        }
    };

    if (selectedImage) {
        return (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 flex items-center justify-center group">
                <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="destructive" size="sm" onClick={onClear}>
                        <X className="w-4 h-4 mr-2" /> Remove
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`relative w-full aspect-video rounded-xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer ${isDragOver
                    ? "border-orange-500 bg-orange-50/50 scale-[1.01]"
                    : "border-neutral-300 hover:border-orange-300 hover:bg-neutral-50"
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                accept="image/*"
                className="hidden"
            />
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-500">
                <Camera className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Click or drag to upload
            </h3>
            <p className="text-neutral-500 text-sm max-w-sm">
                Upload a clear photo of your ingredients (vegetables, fridge contents, items on a table).
            </p>
        </div>
    );
}
