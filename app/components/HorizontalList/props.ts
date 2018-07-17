export type dataObject = {
  title: string;
  subTitle: string;
  image?: string;
}

export interface Props {
  data: dataObject[];
}