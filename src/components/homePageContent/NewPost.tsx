import { UserIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useAuth } from "../../context/AuthContext";

export default function NewPost() {
    const { session, loading} = useAuth();
    const displayDp = !!session && !loading;
  return (
    <Card>
      <CardHeader className="sr-only">
        <CardTitle>New post</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <div>
          {displayDp ? (
            <img src={session?.user.user_metadata.picture} width={"24px"} height={"24px"} />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <div></div>
          <div>
            <Button>Post</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
