
import ImageBase from "../../imagebase/ImageBase";
const imageBase = new ImageBase

interface Ires{
  body:{
  image:string,
  project: string,
  folder: string
  }
}

const res:Ires = {body:{
  image:"image",
project:"projeto",
folder:"pasta"
}}

describe('Upload image', () => {
  it('Test injection class', () => {
    expect(imageBase.post(res.body.image, res.body.project, res.body.folder)).toBe("image, projeto, pasta")
  })
})
