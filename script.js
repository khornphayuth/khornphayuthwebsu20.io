function submitForm(event) {
    event.preventDefault(); // Prevent actual form submission
  
    // Get input values
    document.getElementById("displayName").innerText =
      document.getElementById("name").value;
    document.getElementById("displayEmail").innerText =
      document.getElementById("email").value;
  
    // Format salary value
    const salary = parseFloat(document.getElementById("salary").value);
    const formattedSalary = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(salary);
    document.getElementById("displaySalary").innerText = formattedSalary;
  
    document.getElementById("displayHireDate").innerText =
      document.getElementById("hireDate").value;
  
    // Show success alert
    document.getElementById("successAlert").classList.remove("d-none");
  
    // Reset form fields
    document.getElementById("myForm").reset();
    alert ("1.EmpName : " + document.getElementById('name').value + "\n"+ 
        "2.Email : " + document.getElementById('email').value + "\n"+
        "3.Salary : " + `$${parseFloat(document.getElementById('salary').value).toLocaleString(undefined, {minimumFractionDigits: 2})}` + "\n"+
        "4.HireDate " + document.getElementById('hireDate').value + "\n")
}
  
  function hideAlert() {
    document.getElementById("successAlert").classList.add("d-none");
  }
