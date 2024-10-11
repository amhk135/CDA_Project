document.getElementById('add_reference').addEventListener('click', function() {
    const referenceDiv = document.createElement('div');
    referenceDiv.classList.add('reference-group');
    referenceDiv.innerHTML = `
        <input type="text" name="ref_name" placeholder="Name" />
        <input type="text" name="ref_title" placeholder="Title" />
        <input type="text" name="ref_company" placeholder="Company" />
        <input type="tel" name="ref_phone" placeholder="Telephone" />
        <input type="email" name="ref_email" placeholder="Email" />
    `;
    document.getElementById('references').appendChild(referenceDiv);
});
