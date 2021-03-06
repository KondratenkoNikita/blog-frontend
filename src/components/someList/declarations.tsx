interface NewsItemType {
  id: number;
  text: string;
  commentsNumber?: number;
  isNew?: boolean;
}

interface NewsType {
  list: NewsItemType[];
  pageName: string;
  listName: string;
}

export type SomeListType = NewsType;
