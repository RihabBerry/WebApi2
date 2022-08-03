using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi2.Models
{
    public class DCandidateDTO
    {
       
        
        
        public string fullName { get; set; }

     
        public string moblie { get; set; }

        
        public string  age { get; set; }

        
        public string bloodGroup { get; set; }

       
        public string address { get; set;  }


    }
}
