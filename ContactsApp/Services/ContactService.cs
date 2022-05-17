using Microsoft.EntityFrameworkCore;

using ContactsApp.Data;
using ContactsApp.Models;

namespace ContactsApp.Services
{
	public class ContactService : IContactService
	{
		private readonly ContactsDbContext _context;
		public ContactService(ContactsDbContext contacts)
		{
			_context = contacts;
		}

		public async Task<IEnumerable<Contact>> GetConatactsList()
		{
			return await _context.Contacts.ToListAsync();
		}

		public async Task<Contact> GetConatactsById(int id)
		{
			return await _context.Contacts.FirstOrDefaultAsync(x => x.Id == id);
		}

		public async Task<Contact> CreateConatacts(Contact contact)
		{
			_context.Contacts.Add(contact);
			await _context.SaveChangesAsync();
			return contact;
		}

		public async Task UpdateConatacts(Contact contact)
		{
			_context.Contacts.Update(contact);
			await _context.SaveChangesAsync();
		}

		public async Task DeleteConatacts(Contact contact)
		{
			_context.Contacts.Remove(contact);
			await _context.SaveChangesAsync();
		}
	}
}
