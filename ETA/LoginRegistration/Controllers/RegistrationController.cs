using LoginRegistration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace LoginRegistration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("registration")]
        public string registration(Registration registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SqlCommand cmd = new SqlCommand("INSERT INTO Registration(UserName,Password,Email,IsActive) VALUES('"+registration.UserName+ "','"+registration.Password+ "','"+registration.Email+ "','"+registration.IsActive+ "')", con);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if(i>0)
            {
                return "Data Inserted";
            }
            else
            {
                return "Error";
            }
            return "";
        }
        [HttpPost]
        [Route("login")]

        public string login(Registration registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());
            SqlDataAdapter da= new SqlDataAdapter("SELECT * FROM Registration WHERE Email = '"+registration.Email+ "' AND Password='"+registration.Password+ "' ", con);
            DataTable dt=new DataTable();
            da.Fill(dt);
            if(dt.Rows.Count>0)
            {
                return "Data Found";
            }
            else 
            { 
                return "Invalid Data"; 
            }

        }

    }
}
