import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo:{
    type: String,
    required: false,
  },
},{
  timestamps: true,
});

export default mongoose.model('Project', projectSchema);

