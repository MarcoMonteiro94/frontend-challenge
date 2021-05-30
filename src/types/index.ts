import { Dispatch, SetStateAction } from "react";

export type BookProps = {
  id: string;
  etag: string;
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    authors: String[];
    description: string;
  };
};

export type ModalProps = {
  setBookId: Dispatch<SetStateAction<string>>;
  setModal: Dispatch<SetStateAction<boolean>>;
};
