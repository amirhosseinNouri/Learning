import { it } from "vitest";
import { Brand } from "../helpers/Brand";

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface User {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
}

const db: { users: User[]; posts: Post[] } = {
  users: [
    {
      id: "1",
      name: "Miles",
    },
  ],
  posts: [
    {
      id: "1",
      title: "Hello world",
      content: "This is my first post",
    },
  ],
};

const getUserById = (id: string) => {
  return db.users.find((user) => user.id === id);
};

const getPostById = (id: string) => {
  return db.posts.find((post) => post.id === id);
};

it("Should only let you get a user by id with a user id", () => {
  const postId = "1" as PostId;

  // @ts-expect-error
  getUserById(postId);
});

it("Should only let you get a post by id with a PostId", () => {
  const userId = "1" as UserId;

  // @ts-expect-error
  getPostById(userId);
});
