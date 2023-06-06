export interface Post {
  _id: string,
  title: string,
  description: string,
  profile: {
    _id: string,
    name: string,
  }
  comments: [],
  likes: [],
  image: boolean,
}