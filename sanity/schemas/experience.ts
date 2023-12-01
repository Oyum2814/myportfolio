import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields:[
    {
      name:"name",
      title:"title",
      type:"string",
    },
    {
      name:"name",
      title:"Role",
      type:"string",
    },
    {
      name:"heroImage",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      },
    },
    {
      name:"address",
      title:"Address",
      type:"string",
    },
    {
      name:"socials",
      title:"Socials",
      type:"array",
      of:[{type:"reference",to:{type:"social"}}],
    },
  ],
})
