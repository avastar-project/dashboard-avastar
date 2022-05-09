export namespace Types {
    export type node = {
      name: string;
      group: number;
      radiusSize: number;
      fillColor: string;
    };
    export type link = {
      source: string;
      target: string;
      value: string;
    };
    export type dataObject = {
      nodes: node[];
      links: link[];
    };
    export type point = {
      x: number;
      y: number;
    };
    export type datum = {
      x: number;
      y: number;
      fx: number | null;
      fy: number | null;
    };
  }