// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Categorias documents */
interface CategoriesDocumentData {
  /**
   * Nome da CAtegoria field in *Categorias*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.categoryName
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  categoryName: prismic.KeyTextField;
  /**
   * Imagem da Categoria field in *Categorias*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.categoryImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  categoryImage: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Categorias*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<CategoriesDocumentDataSlicesSlice>;
}
/**
 * Slice for *Categorias → Slice Zone*
 *
 */
type CategoriesDocumentDataSlicesSlice = GallerySlice;
/**
 * Categorias document from Prismic
 *
 * - **API ID**: `categories`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoriesDocumentData>,
    "categories",
    Lang
  >;
/** Content for Trabalhos documents */
interface JobsDocumentData {
  /**
   * Titulo do Trabalhos field in *Trabalhos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.jobTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  jobTitle: prismic.KeyTextField;
  /**
   * Nomes field in *Trabalhos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.jobNames
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  jobNames: prismic.KeyTextField;
  /**
   * Imagem Principal field in *Trabalhos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.mainImageJob
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  mainImageJob: prismic.ImageField<never>;
  /**
   * Localização field in *Trabalhos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.jobLocale
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  jobLocale: prismic.KeyTextField;
  /**
   * Data do Trabalho field in *Trabalhos*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.jobDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  jobDate: prismic.DateField;
  /**
   * Categoria field in *Trabalhos*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  category: prismic.ContentRelationshipField<"categories" | "jobs">;
  /**
   * Descrição field in *Trabalhos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Slice Zone field in *Trabalhos*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: jobs.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<JobsDocumentDataSlicesSlice>;
}
/**
 * Slice for *Trabalhos → Slice Zone*
 *
 */
type JobsDocumentDataSlicesSlice = GallerySlice;
/**
 * Trabalhos document from Prismic
 *
 * - **API ID**: `jobs`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type JobsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<JobsDocumentData>, "jobs", Lang>;
/** Content for Banner Principal documents */
interface MainBannerDocumentData {
  /**
   * Imagem field in *Banner Principal*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: mainBanner.mainImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  mainImage: prismic.ImageField<never>;
}
/**
 * Banner Principal document from Prismic
 *
 * - **API ID**: `mainBanner`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainBannerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MainBannerDocumentData>,
    "mainBanner",
    Lang
  >;
export type AllDocumentTypes =
  | CategoriesDocument
  | JobsDocument
  | MainBannerDocument;
/**
 * Item in Gallery → Items
 *
 */
export interface GallerySliceDefaultItem {
  /**
   * Image field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<GallerySliceDefaultItem>
>;
/**
 * Slice variation for *Gallery*
 *
 */
type GallerySliceVariation = GallerySliceDefault;
/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: `Gallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      CategoriesDocumentData,
      CategoriesDocumentDataSlicesSlice,
      CategoriesDocument,
      JobsDocumentData,
      JobsDocumentDataSlicesSlice,
      JobsDocument,
      MainBannerDocumentData,
      MainBannerDocument,
      AllDocumentTypes,
      GallerySliceDefaultItem,
      GallerySliceDefault,
      GallerySliceVariation,
      GallerySlice,
    };
  }
}
