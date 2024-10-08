const Startup = require("../models/startup");

const StartupService = {
  async getAll() {
    return await Startup.find();
  },
  async getOne(id) {
    return await Startup.findById(id);
  },
  async getFirst(q) {
    return await Startup.find().limit(5);
  },
  async registerOne(data) {
    const newStartup = new Startup({
      name: data.name,
      state_code: data.state_code,
      city: data.city,
      founded_at: data.founded_at,
      category_code: data.category_code,
      status: data.status,
    });
    await newStartup.save();
    return newStartup;
  },
  async updateOne(id, data) {
    const editedStartup = await Startup.findByIdAndUpdate(
      id,
      {
        name: data.name,
        state_code: data.state_code,
        city: data.city,
        founded_at: data.founded_at,
        category_code: data.category_code,
        status: data.status,
      },
      {
        new: true,
      }
    );
    return editedStartup;
  },
  async deleteOne(id) {
    const startup = await Startup.findByIdAndDelete(id);
    return await startup;
  },
};

module.exports = StartupService;
