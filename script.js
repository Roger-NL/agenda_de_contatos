    const form = document.getElementById('contactForm');
    const tableBody = document.querySelector('#contactsTable tbody');
    const errorMessage = document.getElementById('errorMessage');
    let contacts = []; 
    form.addEventListener('submit', function(event) {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value.trim();
    const contactPhone = document.getElementById('contactPhone').value.trim();

    const isDuplicate = contacts.some(contact => 
        contact.name === contactName || contact.phone === contactPhone
    );

    if (isDuplicate) {
        errorMessage.textContent = "Este contato já existe na agenda.";
        return;
    }

    errorMessage.textContent = "";

    contacts.push({ name: contactName, phone: contactPhone });

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${contactName}</td>
        <td>${contactPhone}</td>
        <td><button onclick="removeContact(this, '${contactName}', '${contactPhone}')">Remover</button></td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
    });

    function removeContact(button, name, phone) {
    contacts = contacts.filter(contact => contact.name !== name || contact.phone !== phone);

    const row = button.parentElement.parentElement;
    row.remove();
    }
