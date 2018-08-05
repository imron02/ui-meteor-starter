// @flow

type dataObject = {
  title: string;
  subTitle: string;
  image?: string;
  rating?: number;
  description?: string;
}

export type State = {
  datas: dataObject[];
}
