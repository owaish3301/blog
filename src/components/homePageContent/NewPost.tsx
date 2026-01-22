import { UserIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function NewPost() {
  return (
    <Card>
        <CardHeader className="sr-only">
            <CardTitle>New post</CardTitle>
        </CardHeader>
        <CardContent className="flex">
            <div>
                <UserIcon />
            </div>
            <div>
                <div>

                </div>
                <div>
                    <Button>Post</Button>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
