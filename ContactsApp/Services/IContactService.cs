using ContactsApp.Models;

namespace ContactsApp.Services
{
	public interface IContactService
	{
		Task<IEnumerable<Contact>> GetConatactsList();
		Task<Contact> GetConatactsById(int id);
		Task<Contact> CreateConatacts(Contact contact);
		Task UpdateConatacts(Contact contact);
		Task DeleteConatacts(Contact contact);
	}
}
