export type DatasetsType = {
  data:DatasetType[]
  next_page?:null|string,
  page:number,
  page_size:number,
  previous_page?:null|string,
  total:number
}

export type DatasetType = {
  acronym?:null|string,
  archived?:null|string,
  badges?:[]|BadgeType[],
  community_resources?:[]|CommunityResourceType[],
  created_at:string,
  deleted?:null|string,
  description:string,
  extras:{}|ExtrasType,
  featured?:boolean,
  frequency:string,
  frequency_date?:null|string,
  id?:null|string,
  last_modified:string,
  last_update:string,
  license?:null|string,
  metrics?:{}|MetricsType,
  organization?:{}|OrganizationType,
  owner?:{}|UserType,
  page:string,
  private?:boolean,
  quality?:any, // No documentation
  resources?:[]|ResourceType[],
  slug:string,
  spacial?:any, // No documentation
  tags?:[]|string[],
  temporal_coverage?:{}|TemporalCoverage,
  title:string,
  uri:string
}

export type OrganizationType = {
  acronym?:null|string,
  badges?:[]|BadgeType[],
  created_at?:null|string,
  deleted?:null|string,
  description:string,
  id:string,
  last_modified?:null|string,
  logo?:null|string,
  logo_thumbnail?:null|string,
  members?:[]|{
    role:string,
    user?:{}|UserType
  }[],
  metrics?:{}|MetricsType,
  name:string,
  page?:null|string,
  slug:string,
  uri?:null|string,
  url?:null|string
}

export type CommunityResourceType = {
  checksum?:{}|{
    type?:null|string,
    value:string
  }
  created_at?:null|string,
  description?:null|string,
  extras?:{}|ExtrasType,
  filesize?:number,
  filetype:string,
  format:string,
  id?:null|string,
  last_modified?:null|string,
  latest?:null|string,
  metrics?:{}|MetricsType,
  mime?:null|string,
  preview_url?:null|string,
  published?:null|string,
  schema?:{}|{}|{
    id?:null|string,
    label?:null|string,
    versions?:[]|string[]
  },
  title:string,
  type:string,
  url:string,
  dataset?:{}|{
    class:string,
    id:string,
    acronym?:null|string,
    page?:null|string,
    title?:null|string,
    uri?:null|string
  }
  organization?:{}|{
    class:string,
    id:string,
    acronym?:null|string,
    badges?:[]|BadgeType[],
    logo?:null|string,
    logo_thumbnail?:null|string,
    name:string,
    page?:null|string,
    slug:string,
    uri?:null|string,
  },
  owner?:{}|UserType
}

export type ResourceType = {
  checksum?:{}|{
    type?:null|string,
    value:string
  }
  created_at?:null|string,
  description?:null|string,
  extras?:{}|ExtrasType,
  filesize?:number,
  filetype:string,
  format:string,
  id?:null|string,
  last_modified?:null|string,
  latest?:null|string,
  metrics?:{}|MetricsType,
  mime?:null|string,
  preview_url?:null|string,
  published?:null|string,
  schema?:{}|{
    id?:null|string,
    label?:null|string,
    versions?:[]|string[]
  },
  title:string,
  type:string,
  url:string,
}

export type UserType = {
  class:string,
  id:string,
  avatar?:null|string,
  avatar_thumbnail?:null|string,
  firstname?:null|string,
  lastname?:null|string,
  page?:null|string,
  slug:string,
  uri:string
}

export type ExtrasType = { [key:string]:string|number|boolean }

export type BadgeType = { kind:string }

export type MetricsType = {
  discussions:number,
  followers:number,
  reuses:number,
  views:number
}

export type TemporalCoverage = {
  end:string,
  start:string
}