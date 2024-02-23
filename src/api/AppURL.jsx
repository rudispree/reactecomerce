class AppURL {
    static BaseURL           = "http://localhost:8000/api"
    static VisitorDetails    = this.BaseURL+"/getvisitor"
    static PostContact       = this.BaseURL+"/postcontact"
    static AllSiteinfo       = this.BaseURL+"/allsiteinfo"
    static AllCategoryDetail = this.BaseURL+"/allcategory"

    static ProductListByRemark(Remark) {
        return this.BaseURL+"/productlistbyremark/"+Remark;
    }

    static ProductListByCategory(category) {
        return this.BaseURL+"/productlistbycategory/"+category;
    }

    static ProductListBySubCategory(category,subcategory) {
        return this.BaseURL+"/productlistbysubcategory/"+category+"/"+subcategory;
    }

    static AllSlider = this.BaseURL+"/allslider"
    
    static ProductDetails(code) {
        return this.BaseURL+"/productdetails/"+code;
    }

    static NotificationHistory = this.BaseURL+"/notifiaction"
    
    static PorductBySearch(searchkey) {
        return this.BaseURL+"/search/"+searchkey;
    }


}


export default AppURL
  