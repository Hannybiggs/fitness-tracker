const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter exercise TYPE"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter exercise NAME"
          },
          duration: {
            type: Number,
            required: "Enter exercise DURATION (in minutes)"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );
  

  workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  

  
const Workout = mongoose.model("workout", workoutSchema)

module.exports = Workout;