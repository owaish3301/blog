import { useState } from "react";
import TipTapEditor from "@/components/editor/TipTapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Implement post submission to your backend
      console.log("Submitting post:", { title, content });
      // await supabase.from('posts').insert({ title, content })
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid = title.trim() && content.trim();

  return (
    <div className="px-6 py-6 pb-16 max-w-4xl mx-auto h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <h1 className="text-2xl font-semibold mb-6">Create a new blog post</h1>

      <div className="space-y-6">
        {/* Title Input */}
        <div className="space-y-2">
          <Label htmlFor="post-title">Title</Label>
          <Input
            id="post-title"
            type="text"
            placeholder="Enter your post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg"
          />
        </div>

        {/* Editor */}
        <div className="space-y-2">
          <Label>Content</Label>
          <TipTapEditor
            content={content}
            onChange={setContent}
            placeholder="Start writing your blog post... Use the toolbar above for formatting or type markdown shortcuts like **bold**, *italic*, # heading"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button
            onClick={handleSubmit}
            disabled={!isValid || isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              "Publishing..."
            ) : (
              <>
                <Send className="size-4" />
                Publish Post
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
