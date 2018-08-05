// @flow

export type dataObject = {
  title: string;
  subTitle: string;
  image?: string;
  rating?: number;
  description?: string;
}

export type Props = {
  data: dataObject[];
}
