-> what we will try to do:

swiggy's live API fetching-> most Impoprtant 
then one login logout button
search Restraurants button->Important

we can move onto ROUTING after this

 -> Link helps us to move to a new component without reloading the page and thus makes it a great way to replace anchor tag...although behind the scenes it is just behaving as an anchor tag 

 Client Side Routing and Server Side Routing

Server side is that you make a network call and component comes from the server

Client side routing is we are not making any network calls as yaha par saare components already loaded hai in the app. Therfore single page application is done via  client side routing


 FEATURE:

 we make pages for different restaurants and unke menu load karenge(API Fetching)
 -> DYNAMIC ROUTING
 -> CSS mai Accordion sikh lena that is something important!


CLASS BASED COMPONENT
1) rendering kis tarike se ho rhi hai like the flow of the program wo samajhna important hai
2) here state variables kaise this.state m store hote hai and unki state chnage krne ke liye this.setState ka use  krke jo hum cheeze kr rhe hai that is also important to know.
3) Will not come handy while making projects but interviewer asks questions from this area a lot! Legacy code like puraani companies m toh waha par bhi use hua hoga toh understanding ke liye important hai


-> REACT life cycle 
-> MOUNTING PHASE (important interview Question)
render phase and commit phase
render phase includes constructor and render 

in render children are batched in the render cycle and ek single render hi hota hai for better optimisation

then DOM updates aur dom updation sbse expensive cheez hai isliye react batches the children render ek saath jisse ki km se km reload ho and fast rahein

then component did mount chalega usually used for API calls

component is rendered quickly with the dummy data ya phir jo hum shimmer UI bnayenge in the mounting phase

component did mount is called
<API CALL hoga>
<this.setState>->state variable is updated

UPDATE CYCLE:

yaha pr ye hoga ki after component did mount chl rha hoga continiuation mai and mounting phase khtm ho chuka hoga-> yaha is step par koi new peops ya phir setState hua hoga during componentDidMount jisse ki render ek aur baar hoga and now since the state has been changed for example with an API data toh is baar render jb chlega toh it will display the new API data wala UI

HTML is loaded with new Data yaani DOM update ho jayega

componentDidUpdate


TASKS->


L-09
custom hook bnao and store the fetching wala saara kaam do it in that customhook and baaki restaurant menu ka single responsibility feature rhega ki wo sirf display mai kaam aayega restaurant ke menu ko!

->useOnline status custom hook
-> optimising the app by using lazy loading in a Grocery store for the purpose of having small apps running in a large application such that we can do chunking and bundler mai ek badi JS file ke bajay chunks ban jaye! -> let's see CRA pr work krega ya naii naii toh is optimisation wale part ko skip bhi kr skte but dhyan rkho ki lazy loading and suspense fallback kaise use hoga!


CODING PART Shuru
->TASKS:
fetching restaurant menu -> dikkat ye hai ki swiggy ka live api jo hai wo kaam khrab krega -> menu display naii ho raha hai what swiggy has done ki unhone apne links ke andar data daal diya hai which is problematic and nowhere to be seen on the Internet for our project isliye hardcoded mock data hi use krna pdega hum logo ko!
useParams wala part important
custom hooks
optimising a little bit 
Thoda bhut use tailwind as well

-> DSA is very important (AIM-> Stacks Queues Trees Graphs DP -> do all of these Question practice in next few months and  jo ye piche tumne array strings linked list binary search sliding window ye sb pr grip maintain rkhna) 
-> Dev is very important too but if u take a look at it then you will see that ki dev mai hum lack kr rhe hai toh dev strengthen krna pdega bhai-> Javascript revision kro ache se topics like jo end m the vo important hai and build in REACT.....like react m projects bnao koi problem ki baat naii hai....your JS and React should be very good for frontend interviews and isko sth sth krte rho revise along with some mini projects then move on to Backend after creating 1-2 projects!

-> enjoy while doing it-> create new features and post it on Linkedin soon! -> 2posts needed before going on to 3rd year!
college -> on college days 6hrs minimum -> kaise hoga ye it will be like ki hum 10-4 college hai maan le toh 6-2 we will have 8hrs and isme 6hrs nikalna kaafi rhega vrna break it ki yrr 5->7 ek session then 7.30->9.30 ek session mtlb mota mota agar mai khu u need to get 4 hrs before dinner okay n then after dinner 3hrs nikaalo
on off days-> 10 hrs


work to be done:
1) start with ContextAPI
2) restrau menu pr work krenge then
3) login form 
4) cart functionality khud se add krne ki try krenge


RTK 23 ko pdhte hai
and 25 ko project wrap up kr denge and Linkedin pr 2 post kr denge!






UserContext
1) normal usage we have seen ki object hota hai ek which has its key value pairs and it is wrapped inside the createContext whereas jb jaha chahiye ho tab we can use useContext jisse ki hum access kr paye us object ki values ko!✅
2) now we will see how can we make ContextAPI work in class based components!✅
3) now we will see how we can change the values of keys inside this global object and also can assign it accordingly ki maan lo header m Shushant chl rha hai naam aur khi aur Default user chal rha ho so let's see✅
4) this type of working can be used in the form ki hum ek state variable ko use krenge in some other component...mtlb ki context ke thorugh value of the varibale jo change honi hai wo bhi pass 


-> working on the menu part and designing it in the form of accoridion!


Done part:

1) I have extracted the datas according to the categories in a good manner
2) we fetched out the images url from API by matching it with swiggy's link and also we did a little CSS on the menu page
3) then reading lifting the states up!

To do:
1) now we have to do the styling part jisme accordion bnana hai!
2) writing react for the accordion part!
3) accoridion ki functionality bnaane ki try krna if nhi bnegi then read about ki states parent se children m kaise pass krte hai and unka effect kaise pdta hai.....and if aise work na krein toh Akhsay Bhaiya wala method is self sufficient!
4) Shimmer UI
5) Nilogrib wala wo frontpage




then we have to make a login form
 try to build a cart section -> important hai khudse try krna kaafi shi rhega


what to do now:
accordion wala dekho kis way m divs vgerah lgayenge for that to work and then we will implement react uske upar jo ki khudse apply krunga mai then we will also have to make Shimmer UI
and also read the lifting states up article




// Lifting the state up is an OG thing yrrr
-> waha se we can think of a situation where a child compponent can change the state of a parent component!
-> try to write the code of lifting the state up by yourself you will get to know about it!




DSA nhi shorrna h daily 3-4 hrs dedicate kro
Dev bilkul dedication ke sth pdho and projects bnaate rho usse tumhara frontend bhut improve hoga!
then utilise the course of yours for building projects

->Ek full revision of React and JS krna hai humein


# What to do now
1) Create accordion wala part in working state.->DONE
2) Then create a login form functionality
3) 

# What we did
1) we did the accordion working usme saara data shi kiya
2) i resolved the glitch jb hmari API kyuki live hai toh sometimes changes the restaurants data to another index of cards array so we used a find method jisse ki hr baar humein data mile hi mile

# TASK
we will try to create a login form functionality
jiska flow kuch aisa hoga
we will take our user to a new login path jha pr ek nya component render krwa denge jo ki basically ek form hoga and then us form m jaise hi submit button pr click hota hai we will take that name to the default user wali jgh pr
yaani somehow we will try ki vohi same contextAPI ke through hi kr le and then tomorrow hum REdux TOOLKIT ka use krte hue we will create the CART section and then payment wala ek process define kr dena jo ki extra kaam rhega


SHIMMER UI for the front page
rounded rounded photos jo ki scrollable ho wo ek feature daal sakte ho

CSS heavily krna pdegi aur ache se kaafi time lgega ise


# 24/07

we will get the cart functionality in working state with the help of RTK! -> LATER (1st till 11 get some DSA questions on Stack done!)


# 25/07

1) we will get the login form functionality ready
2) image hover effect
3) cart in full working condition
4) we will try to create a payment section as well


# 26/07

1) last lecture done karo isme complete
2) CSS of all the components ek baar shi kr lo
3) sabhi cheeze done karo isme 
4) mass m follow reequest bejhni hai sabko

# 27/07

1) we will post the food ordering app on Linkedin and also maintain our linkedin

# Types of Testing:
Unit testing
Integration testing
end to end testing

as a developer we can have our focus on first two types of testing
-> testing is important as in many companies developer has the job of testing as well

-> Testing m we have to write test cases kuch aisa aisa hoga we will see it moving forward

-> React Testing library use jest behind the scenes

# Testing ka setup ek baar Youtube se bitha lena I'll watch it till 2 hrs 

then I will move towards the functionalitites part like cart m state management and stuff and also do the login form functionality


Akshay bhaiya have used redux for managing our cart
but hum jo hai shift krenge us feature in a way jisse ki wo thoda aur functional aur better ho jaye use normal react for this


# FLOW 
<<< <GFG cart article is very nice to understand about the flow of the data and states we can pass from parent component to child component as props> >>


# To do
<<<task we have to do the reomve cart using splice ya phir slice and then whole data I have to use in the cart page watch the whole video jisme react wale part pr dhyan do and then css baad m implement kr lena your item info page looks fine and wo  object ke zriye +,- karna also is looking fine bs ab array bna lo and uspr map krke apne cart page ko implement kr lo>>>

<<<task2 LOGIN PAGE and us login page pr jo bhi naam submit ho that should be displayed instead of the default user ye sb kaam krna hai>>>

<<<CSS copy kr lo for both login popup and also use the css from YT in cart functionality>>>

# TASK

<<<Create loginpopup now and create the cart getTotal function and apply some CSS>>>
  

<<<TRAIN train mai we will work on the css properly of our app and try to get it better as mostly baaki kaam ho hi gya hai and create contact us and about page for the app>>>

<<<TASK1 getting the cart functionality ready pura dhng se and surely you will love it ✅>>>
<<<TASK2 getting the login form functionality ✅>>>

<<<CSS wala sara kaam train m kr lena yrr and also some normal functionalities like about and contact us page bhi bna lena mst sa bs ye kaam krna hai and we will finish with thre project>>>

# what we have done
<<<fadein animation, scrolle effect>>>
<<<css of sign in component and cart section is done>>>
<<<also the sign in ke sth context change ho jaye of the name on submission that is also done!>>>


#Remaining:- 30/07/24 (The End)
<<<CSS 1) MENU pages of each restrau 2) About us page 3) contact us page 4)fix the header component on scrolling! 5)+,- button css karni hai  6)Footer>>>


<<<About us page and Contact us form copy kr lo khi se>>>

# DONE
1) contact us page done using email functionality and also popup is good
2) +,- button done
3) sign up page is now pretty good
4) header component is fixed now
5) fadeIn animation on opening th headimg

<<<REMAINING>>>
1) About us
2) Menu pages of each restrau ki CSS(Important)
3) Footer
4) if landing page u can make it better then game is over
-> Itna Itna kr lo shi ho jayega menu pages bdhiya sa bn jaye + ek landing page acha mil jaye toh phir bhut hi pyara sa bn jayega project
-> we will take 2-3 days more and furnish it
-> DSA krte rho sth sth
-> Revise Javascript and react and then move on to one more project aur uske baad backend pr shift ho jaana!




# Task

<<<Landing page -> DONE ✅>>>
<<<Restauarant menu css -> also icon click par up down just like a proper accordion!✅>>>
<<<a. menu page css is very important you know usme ek accordions ache design kro and upper photo and restrau description acha dikhe!✅>>>
<<<a. I fine tuned my project today by margins a major boost in the project today>>>
# Remaining
<<<A. Saturday is the last day jis day humein post kr dena hai and that will be enough for this project!>>>
<<<About us page and footer component designing -> last task>>>
<<<a. ek fake payment method type agar ho jaye toh shi rhega for time being✅>>>

<<<keep a mock json data of foodrender API if in case work na krein toh humein problem na ho in future>>>

<<<Remaining time=2days>>>
<<<a. Cards overlay effect-> tough ans isse cards bigar skte hai isliye rehne do >>>
<<<b. Show all restaurants button in a decent position✅>>>
<<<cart section mai delivery ke prices settle kiye and also did some css in the body section buttons✅>>>
<<<c. Shimmer UI -> imp. for meu page>>>
<<<d. About us page -> important>>>
<<<e. Footer component -> marks the finishing of the project>>>

<<<a.footer and about us aaj hi bna lo shaam ko>>>

<<<DSA-> 4hrs jisme ki we will start Trees revision from start and solve basic problems today to get the flow right!>>>
