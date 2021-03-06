import { observable, autorun, toJS, configure, action, computed } from 'mobx';

import api from '../utils/api';

export type depsArray = { name: string, department_id: number }[];
export type catsArray = { name: string, category_id: number, department_id: number }[];
export type productsArray = { name: string, description: string, product_id: number, price: number, discounted_price: number, thumbnail: string }[];

export type product = { name: string, description: string, product_id: number, price: number, discounted_price: number, thumbnail: string };

class Store {

    @observable departments: depsArray | null = null;
    @observable loadingDeps: boolean = false;

    @observable categories: catsArray | null | false = null;

    @observable products: productsArray | null | false = null;

    @observable shoppingCart: productsArray | null = null;

    @observable currentDept: number | null = null;
    @observable currentCat: number | null = null;

    @computed get pageTitle() {
        var dep = this.departments && this.departments.find(e => e.department_id == this.currentDept);
        var cat = this.categories && this.categories.find(e => e.category_id == this.currentCat);

        var res = `${dep ? dep.name : ''} ${cat ? ' - ' + cat.name : ''}`;
        return res;
    }

    @action getDepartments() {
        if (this.loadingDeps || this.departments) return;

        var depsLocal = localStorage.getItem('departments');
        var depsLocalTime = localStorage.getItem('departments_time');
        if (depsLocal && depsLocalTime &&
            Date.now() - parseInt(depsLocalTime) < 7 * 24 * 60 * 60 * 1000) {
            this.departments = JSON.parse(depsLocal);
            return;
        }

        this.loadingDeps = true;
        var callback = (result: depsArray) => {
            localStorage.setItem('departments', JSON.stringify(toJS(result)));
            localStorage.setItem('departments_time', Date.now() + '');

            this.departments = result;
            this.loadingDeps = false;
        }
        api.getDepartments(callback);
    }

    @action setDepartment(id: number) {
        this.currentDept = id;
        this.currentCat = null;
    }

    @action getCategories() {
        if (this.categories != null) return;

        this.categories = false;
        api.getCategories((result: catsArray) => {
            this.categories = result;
        });
    }

    @action setCategory(id: number) {
        this.currentCat = id;
    }

    @action getProducts() {
        if (this.products != null) return;

        this.products = false;
        api.getProducts((result: productsArray) => {
            this.products = result;
        });
    }

    @action setShoppingCartProduct(product: product) {
        if (!this.shoppingCart)
        this.shoppingCart = [];

        if (this.shoppingCart) 
            this.shoppingCart.push(product);
            console.log(this.shoppingCart);
    }
}

const store = new Store();

export default store;