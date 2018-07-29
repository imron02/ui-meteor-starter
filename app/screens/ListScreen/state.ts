type dataObject = {
  title: string;
  subTitle: string;
  image?: string;
  rating?: number;
  description?: string;
}

export interface State {
  datas: dataObject[];
}