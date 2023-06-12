// Create a class called Person that accepts a first and last name, date of birth, email, password and confirm password:
class Person {
    constructor(firstName, lastName, dob, about, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        //dob:Date of birth
        this.dob = dob;
        this.about = about;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.authoredPosts = [];
        this.comments = [];
        this.likedPosts = [];
        this.dislikedPosts = [];

        this.work = "";
        this.university = "";
        this.residence = "";
    }

    // Create a method that returns the full name of the person:
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Create a method that returns the email:
    getEmail() {
        return this.email;
    }

    // Create a method that returns the age as of the current date:
    getAge() {
        let today = new Date();
        let birthDate = new Date(this.dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // Create a method called atLogin that checks whether the details provided as input match the details of the person:
    atLogin(email, password) {
        return this.email === email && this.password === password;
    }

    // Create a method called changePassword that allows the user to change their password:
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            alert("Password changed successfully!");
            return true;
        }
        alert("The old password you entered is incorrect!");
        return false;
    }

    // Create a method called delete that deletes the person:
    delete() {
        alert("Account deleted successfully!");
        return null;
    }

    // Create a method called update that allows the user to update their details after confirming their password:
    update(password, firstName, lastName, about, dob, email, work, university, residence) {
        if (this.password === password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.about = about;
            this.dob = dob;
            this.email = email;
            this.work = work;
            this.university = university;
            this.residence = residence;
            alert("Account updated successfully!");
            return true;
        }
        alert("The password you entered is incorrect!");
        return false;
    }

    // Create a method called display that displays the person’s details:
    display( displayElement ) {
        /**
         * TODO[Done]:
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileSection:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileSection div to the class:
         * "col-sm-4"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileCard:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileCard div to the class:
         * "card"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a image element and store it in a constant variable called profileImage:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileImage image to the class:
         * "card-img-top"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the setAttribute method to set the src attribute of the profileImage image to the following link:
         * "https://www.w3schools.com/bootstrap4/img_avatar1.png"
         * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileCardBody:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileCardBody div to the class:
         * "card-body"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a h4 element and store it in a constant variable called profileName:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileName h4 to the class:
         * "card-title"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the full name of the person and store it in a constant variable called profileNameText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileNameText text node to the profileName h4:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a p element and store it in a constant variable called profileAbout:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileAbout p to the class:
         * "card-text"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the about of the person and store it in a constant variable called profileAboutText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileAboutText text node to the profileAbout p:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a p element and store it in a constant variable called profileAge:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileAge p to the class:
         * "card-text"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the age of the person and store it in a constant variable called profileAgeText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileAgeText text node to the profileAge p:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a ul element and store it in a constant variable called profileWorkUniReside:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileWorkUniReside ul to the class:
         * "list-group list-group-flush text-right"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a li element and store it in a constant variable called profileWork:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileWork li to the class:
         * "list-group-item"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the work of the person and store it in a constant variable called profileWorkText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileWorkText text node to the profileWork li:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a li element and store it in a constant variable called profileUniversity:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileUniversity li to the class:
         * "list-group-item"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the university of the person and store it in a constant variable called profileUniversityText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileUniversityText text node to the profileUniversity li:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a li element and store it in a constant variable called profileResidence:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileResidence li to the class:
         * "list-group-item"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the residence of the person and store it in a constant variable called profileResidenceText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileResidenceText text node to the profileResidence li:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileDeleteEdit:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileDeleteEdit div to the class:
         * "d-flex card-body justify-content-between"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a button element and store it in a constant variable called profileDelete:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileDelete button to the class:
         * "btn btn-outline-danger"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the text "Delete" and store it in a constant variable called profileDeleteText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileDeleteText text node to the profileDelete button:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a button element and store it in a constant variable called profileEdit:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileEdit button to the class:
         * "btn btn-outline-primary"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the text "Edit" and store it in a constant variable called profileEditText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileEditText text node to the profileEdit button:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the appendChild method to append the profileImage image to the profileCard div:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        // YOUR CODE STARTS HERE (Feel free to add more lines below this one)
        const profileSection = document.createElement("div")
        profileSection.classList.add("col-sm-4")

        const profileCard = document.createElement("div")
        profileCard.classList.add("card")

        const profileImage = document.createElement("img")
        profileImage.classList.add("card-img-top")
        profileImage.setAttribute("src","https://www.w3schools.com/bootstrap4/img_avatar1.png")

        const profileCardBody = document.createElement("div")
        profileCardBody.classList.add("card-body")

        const profileName = document.createElement("H4")
        profileName.classList.add("card-title")
        const profileNameText = document.createTextNode(this.fullName)
        profileName.appendChild(profileNameText)

        const profileAbout = document.createElement("p")
        profileAbout.classList.add("card-text")
        const profileAboutText = document.createTextNode(this.about)
        profileAbout.appendChild(profileAboutText)

        const profileAge = document.createElement("p")
        profileAbout.classList.add("card-text")
        const profileAgeText = document.createTextNode(this.age)
        profileAge.appendChild(profileAgeText)

        const profileWorkUniReside = document.createElement("ul")
        profileWorkUniReside.classList.add("list-group list-group-flush text-right")
        
        const profileWork = document.createElement("li")
        profileAbout.classList.add("list-group-item")
        const profileWorkText = document.createTextNode(this.work)
        profileWork.appendChild(profileWorkText)
        
        const profileUniversity = document.createElement("li")
        profileUniversity.classList.add("list-group-item")
        const profileUniversityText = document.createTextNode(this.university)
        profileUniversity.appendChild(profileUniversityText)
        
        const profileResidence = document.createElement("li")
        profileResidence.classList.add("list-group-item")
        const profileResidenceText = document.createTextNode(this.residence)
        profileResidence.appendChild(profileResidenceText)

        const profileDeleteEdit = document.createElement("div")
        profileDeleteEdit.classList.add("d-flex card-body justify-content-between")

        const profileDelete = document.createElement("button")
        profileDelete.classList.add("btn btn-outline-danger")
        const profileDeleteText = document.createTextNode("Delete")
        profileDelete.appendChild(profileDeleteText)

        //I changed this part from promary to info :D
        const profileEdit = document.createElement("button")
        profileEdit.classList.add("btn btn-outline-info")
        const profileEditText = document.createTextNode("Edit")
        profileEdit.appendChild(profileEditText)

        profileCard.appendChild(profileImage)
        // YOUR CODE ENDS HERE (Feel free to add more lines above this one)

        /**
         * TODO[Done]:
         * 
         * Use the appendChild method to append the profileImage image to the profileCard div:
         * Use the appendChild method to append the profileCardBody div to the profileCard div:
         * Use the appendChild method to append the profileName h4 to the profileCardBody div:
         * Use the appendChild method to append the profileAbout p to the profileCardBody div:
         * Use the appendChild method to append the profileAge p to the profileCardBody div:
         * Use the appendChild method to append the profileWork li to the profileWorkUniReside ul:
         * Use the appendChild method to append the profileUniversity li to the profileWorkUniReside ul:
         * Use the appendChild method to append the profileResidence li to the profileWorkUniReside ul:
         * Use the appendChild method to append the profileDelete button to the profileDeleteEdit div:
         * Use the appendChild method to append the profileEdit button to the profileDeleteEdit div:
         * Use the appendChild method to append the profileWorkUniReside ul to the profileCard div:
         * Use the appendChild method to append the profileDeleteEdit div to the profileCard div:
         * Use the appendChild method to append the profileCard div to the profileSection div:
         * Use the appendChild method to append the profileSection div to the profile div:
         * 
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        // YOUR CODE STARTS HERE (Feel free to add more lines below this one)
        profileCard.appendChild(profileImage)
        profileCard.appendChild(profileCardBody)

        profileCardBody.appendChild(profileName)
        profileCardBody.appendChild(profileAbout)
        profileCardBody.appendChild(profileAge)

        profileWorkUniReside.appendChild(profileWork)
        profileWorkUniReside.appendChild(profileUniversity)
        profileWorkUniReside.appendChild(profileResidence)

        //I rearranged delete and edit :D
        profileDeleteEdit.appendChild(profileEdit)
        profileDeleteEdit.appendChild(profileDelete)

        profileCard.appendChild(profileWorkUniReside)
        profileCard.appendChild(profileDeleteEdit)

        profileSection.appendChild(profileCard)

        profile.appendChild(profileSection)

        displayElement.appendChild(profile)
        // YOUR CODE ENDS HERE (Feel free to add more lines above this one)

    }

}

export default Person;