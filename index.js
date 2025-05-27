//-------Sidebar------//
const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");

allDropdown.forEach(item => {
    const a = item.parentElement.querySelector("a:first-child");
    
    a.addEventListener('click', function(e) {
        e.preventDefault();
        
        allDropdown.forEach(dropdown => {
            const link = dropdown.parentElement.querySelector("a:first-child");
            if (link !== this) {
                link.classList.remove('active');
                dropdown.classList.remove('show');
            }
        });

        this.classList.toggle('active');
        item.classList.toggle('show');
    });
});

//======Profile Dropdown=====//

const profile = document.querySelector('nav .profile');
const userInfo = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

userInfo.addEventListener('click', function(){
    dropdownProfile.classList.toggle('show');

});
  




window.addEventListener('click', function(e){
    if(e.target !== userInfo){
        if(e.target !== dropdownProfile){
            if(dropdownProfile.classList.contains('show')){
                dropdownProfile.classList.remove('show');
            }
        }
    }
    
});

//===========Sidebar Toggle============//
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const pageLogo = document.querySelector('nav .logo');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', function(){
    sidebar.classList.toggle('hide');
    
});

//=============Light Mode===========//
const lightMode = document.querySelector('nav .light-mode');
const mainContentBg = document.getElementById('#main-content');
const sidebarMode = document.getElementById("#sidebar");
const navbarMode = document.querySelector('nav');

lightMode.addEventListener('click', function(){
    mainContentBg.classList.toggle('add');
    sidebarMode.classList.toggle('add');
    navbarMode.classList.toggle('add');
})


//========For Product==========//





function loadPage(pageid,type){
    
    switch (pageid) {
        case 'profile':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");            
            $(type).addClass("active");
            loadProfile()
            break;

        case 'home':
            $(".side-dropdown").removeClass("show");
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadHomepageData();
            break;
        case 'crm':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadcrmpage();
            break;
        case 'customers':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadCustomers();
            break;
        case 'feedback':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadFeedBack();
            break;
        case 'reminder':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadReminder();
            break;
        case 'fb-collection':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadFeedbackCollection();
            break;
        case 'c-complaints':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadCustomerComplaints();
            break;
        case 'complaint-details':
            loadComplaintDetails();
            break;         
        case 'c-inquiries':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadCustomerInquiries();
            break;    
        case 'inquiry-details':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadInquiryDetails();
            break;         

        case 'performance':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadPerformance();
            break; 
        case 'crm-msg':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadMessages();
            break;
        case 'sales-dash':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadSalesDash();
            break;
        case 'c-orders':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadOrders();
            break;
        case 'revenue':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadRevenue();
            break;    
        case 'sales-tasks':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadSalesTasks();
            break;    
        case 'distributors':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadDistributors();
            break; 
        case 'distributors-view':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadDistributorsView();
            break;
        case 'distributors-list':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadDistributorsList();
            break; 

        case 'suppliers':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadSuppliersList();
            break; 
        case 'suppliers-details':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadSuppliersDetails();
            break;        
        case 'inventory':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadInventory();
            break;
        case 'investments':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadInvestments();
            break;    
        case 'stock-in-out':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadStockMovement();
            break;        
        case 'invoice-list':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadInvoiceList();
            break;   
        case 'invoice-preview':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadInvoicePreview();
            break; 
        case 'production-dash':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadProductDash();
            break;
        case 'production':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadProduction();
            break;
        case 'milk-production':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadMilkProduction();
            break; 
        case 'curd-production':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadCurdProduction();
            break;
        case 'ghee-production':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadGheeProduction();
            break;
        case 'paneer-production':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadPaneerProduction();
            break; 
                              
        case 'quality-control':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadQualityControl();
            break;
        case 'production-inventory':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadMainInventory();
            break;                             
        case 'live-stock':
            loadLiveStock();
            break;    

        case 'hrm':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadhrmpage();
            break;    
        case 'attendance':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadAttendance();
            break;
        case 'calendar':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadCalendar();
            break;
        case 'tasks':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadTasks();
            break;        
        case 'benefits':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadBenfits();
            break;    
            
        case 'salary-comp':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadSalaryComp();
            break;
        case 'payslips':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadPayslips();
            break;    

        case 'leaves':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadleaves();
            break;


        case 'log-dash':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
           
            loadLogDash();
            break;
        case 'log-step':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadLogStep();
            break;
            
        case 'product-list':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadProductList();
            break;

        case 'add-product':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadAddProduct();
            break;
        case 'product-view':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadAddProduct();
            break;            
            
        case 'orders-list':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadOrders();
            break;
        case 'orders-Status':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
            loadAddProduct();
            break;    
        case '':
            $(".side-menu > li > a").removeClass("active");
            $(".side-menu ul > li > a").removeClass("active");
            $(type).addClass("active");
           
            break;


        default:
            break;
    }
}

