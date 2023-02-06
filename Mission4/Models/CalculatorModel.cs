using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class CalculatorModel
    {
        // get and set form variables, must be between 0 and 100
        [Range(0,100, ErrorMessage = "Must be between 0 and 100")]
        public int assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int group_projects { get; set; }
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int midterm_exam { get; set; }
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int final_exam { get; set; }
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int intex { get; set; }

    }
}
