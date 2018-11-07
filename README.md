# lead-management-server
[![Build Status](https://travis-ci.org/JBossOutreach/lead-management-server.svg?branch=master)](https://travis-ci.org/JBossOutreach/lead-management-server)

For account authentication, set up a Firebase project [here](https://console.firebase.google.com)
and add the project configuration in the [public/js/config.js](https://github.com/jboss-outreach/lead-management-server/blob/master/public/js/config.js) file.

## Lead (sales lead)
A sales lead is a potential sales contact, an individual or organization that expresses an interest in your goods or services. Leads are typically obtained through the referral of an existing customer, or through a direct response to advertising or publicity. A company's marketing department is typically responsible for lead generation.



## Setting up project

**1.** **Fork** this project by clicking the _Fork_ button on top right corner of this page.

**2.** **Clone** the repository by running following command in [git](https://git-scm.com/):
```
$ git clone https://github.com/[YOUR-USERNAME]/lead-management-server.git
```

**3.** **Create a new branch** by running the following on terminal/command prompt:
```
$ git checkout -b [YOUR_BRANCH_NAME]
```
Make sure that the branch name is meaningful and related to the changes you are making. For example, if you are updating the documentation, a suitable branch name would be `docsUpdate`. Branches are useful when you have multiple Pull Requests on the same repository.

**4.** **Open the project** using your favourite text editor and make changes! Make sure you run the project after every change to verify that it works well.


## Running the project

Execute the following commands in terminal/command prompt to run the project:
```sh
$ npm install
$ npm start
```

## Contributing

**1.** Make reasonable changes.
**2.** Test your changes by:
```
$ npm test
```

**3.** **Add all changes** by running this command on the terminal/command prompt:
```
$ git add .
```

The above command will add all files to the staging area.
Or to add specific files only, run this command:
```
$ git add path/to/your/file
```
Make sure you replace `path/to/your/file` with the actual path to the file you want to add to the staging area.

**4.** **Commit** changes.
```
$ git commit -m "DESCRIBE YOUR CHANGES HERE"
```
**5.** **Push** your changes.
```
$ git push origin YOUR_BRANCH_NAME
```
Make sure you push only to your branch.

**6.** **Create a Pull Request** by clicking the _New Pull Request_ button on your repository page.

## Help
If you need any help anywhere in the process, you can always ask a question on our [Gitter Chat](https://gitter.im/jboss-outreach/gci).


Happy Coding!
