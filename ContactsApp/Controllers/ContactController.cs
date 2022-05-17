using ContactsApp.Models;
using ContactsApp.Services;

using Microsoft.AspNetCore.Mvc;

namespace ContactsApp.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ContactController : ControllerBase
	{
		private readonly IContactService _contactsService;

		public ContactController(IContactService contactsService)
		{
			_contactsService = contactsService;
		}

		[HttpGet]
		public async Task<IEnumerable<Contact>> Get()
		{
			return await _contactsService.GetConatactsList();
		}
		[HttpGet("{id}")]
		public async Task<ActionResult<Contact>> Get(int id)
		{
			var contact = await _contactsService.GetConatactsById(id);
			if (contact == null) return NotFound();
			return Ok(contact);
		}
		[HttpPost]
		public async Task<ActionResult<Contact>> Post(Contact contact)
		{
			await _contactsService.CreateConatacts(contact);
			return CreatedAtAction("Post", new { id = contact.Id }, contact);
		}
		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, Contact contact)
		{
			if (id != contact.Id) return BadRequest();
			await _contactsService.UpdateConatacts(contact);
			return NoContent();
		}
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			if (id < 0) return BadRequest();
			var contact = await _contactsService.GetConatactsById(id);
			if (contact == null) return NotFound();
			await _contactsService.DeleteConatacts(contact);
			return NoContent();
		}
	}
}
