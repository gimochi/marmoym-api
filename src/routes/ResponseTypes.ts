interface Term {
  id: number;
  label: string;
  roman: string;
}

interface Definition {
  id: number;
  label: string;
  termId: number;
  username: string;
  poss: string[];
  usages: string[];
  origins: string[];
  upvote: number;
  downvote: number;
  createdAt: number;
  updatedAt: number;
}

interface User {
  id: number;
  username: string;
}

interface Comment {
  id: number;
  depth: number;
  parent_id: number;
  label: string;
  user_id: number;
  vote_id: number;
  created_at: number;
  updated_at: number;
}

interface DefinitionAbstract {
  id: number;
  updatedAt: number;
}

export namespace DefinitionResponse {
  export interface idGet {
    defIds: DefinitionAbstract[];
  }

  export interface Get {
    terms: Term[];
    definitions: Definition[];
    users: User[];
  }
}

export namespace CommentResponse {
  export interface Get {
    comments: Comment[];
    users: User[];
  }
}