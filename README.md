Sistercake

This is a Web Application for cake shop, using React for fron-end and SoftUni Practice server for back-end. 

![alt text](home.png)
![alt text](home2.png)
![alt text](home3.png)

The site have piblic part and private part. 

All visitors can view gallery, menu and comments, but only registere users can avantage of the full functionality of the application. Registered users can read, post, edit, like (if they are not the owner of the comment) and delete comments, they can see details of cakes and make purchases.

Navigation Bar for guests
![alt text](navBar-guest-1.png)

Navigation bar for users
![alt text](navBar-user.png)


Home page

Public page for all users. The header with navigation, banner, cake images from gallery, menu shortcut and footer.

For us

Public page for all users. Info for the Sistercake shop and image.
![alt text](forUs.png)


Gallery

Public page for all users. Тhere are pictures of cakes that can be viewed. Тhey are loaded from the server with get request. Have pagination for images and animation animation on initial loading of images.

![alt text](gallery.png)

Еach picture can be opened in a separate window, so it can be seen in a larger size
![alt text](<gallery - img.png>)

Menu

This page contains four categories of cakes that all users can see, but only registered users can see details and buy the cake. Each category contains several photos that are displayed using pagination.
![alt text](menu2.png)

If guests wants to see the details of a cake, they must be logged in, so they are redirected to the login page
![alt text](detailsGuest.png)

If a user wants to see the details of a cake, he is redirected to a page where he can buy the cake
![alt text](get.png)

Coomments

The page containt comments of users for cakes.
![alt text](clients.png) 

All users can see these comments, but only registed user can create comment, read details of comment and like comment.

![alt text](comment.png) ![alt text](editComment.png) ![alt text](editComment2.png)

When details are clicked, if the user is the owner of the comment, they can delete or edit it, but if the comment belongs to another user, they can like it
![alt text](commnent2.png)


Comment can be liked by a user only once.
![alt text](like.png) 

If the user tries to like the comment a second time, he gets a message that he has already liked it.
![alt text](liked.png)

Profile

Login and Register page only for guest users. If have login user he can see Exit button. 

![alt text](register.png)  ![alt text](login.png)

If the user has forgotten his password, he can recover it by the email
![alt text](recoveryPass.png)

Contacts
Options for contacting the company are listed.
![alt text](contact.png)





