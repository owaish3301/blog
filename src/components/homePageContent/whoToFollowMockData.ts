interface FollowSuggestionType{
    imgLink?:string;
    name:string;
    userId:string;
}

const followSuggestion: FollowSuggestionType[] = [
  {
    imgLink: "https://api.dicebear.com/9.x/pixel-art/svg",
    name: "Jane Doe",
    userId: "jane_doe",
  },
  {
    name: "John Smith",
    userId: "john_smith",
  },
  {
    imgLink: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Jane",
    name: "Alex Lee",
    userId: "alex_lee",
  },
  {
    name: "Maya Patel",
    userId: "maya_patel",
  },
  {
    imgLink: "https://api.dicebear.com/9.x/bottts/png",
    name: "Leo Nguyen",
    userId: "leo_nguyen",
  },
];

export default followSuggestion;