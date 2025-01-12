import { type SchemaTypeDefinition } from 'sanity'
import user from '../schema/user'
import user1 from '../schema/user1'
import user2 from '../schema/user2'
import user3 from '../schema/user3'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user,user1,user2,user3,],

}