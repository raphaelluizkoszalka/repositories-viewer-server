import mongoose, { Schema } from 'mongoose'

const repositorySchema = new Schema({
  repositoryAPIUrl: {
    type: String
  },
  repositoryHTMLUrl: {
    type: String
  },
  repositoryOwner: {
    type: String
  },
  repositoryName: {
    type: String
  },
  userLogin: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

repositorySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      repositoryAPIUrl: this.repositoryAPIUrl,
      repositoryHTMLUrl: this.repositoryHTMLUrl,
      repositoryOwner: this.repositoryOwner,
      repositoryName: this.repositoryName,
      userLogin: this.userLogin,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Repository', repositorySchema)

export const schema = model.schema
export default model
