import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

class NavbarService {
    constructor() { }
}
NavbarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NavbarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NavbarComponent {
    constructor() { }
    ngOnInit() { }
}
NavbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.0", type: NavbarComponent, selector: "lib-navbar", ngImport: i0, template: `
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  `, isInline: true, styles: [".topnav{background-color:#333;overflow:hidden}.topnav a{float:left;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav a:hover{background-color:#ddd;color:#000}.topnav a.active{background-color:#04aa6d;color:#fff}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-navbar', template: `
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  `, styles: [".topnav{background-color:#333;overflow:hidden}.topnav a{float:left;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav a:hover{background-color:#ddd;color:#000}.topnav a.active{background-color:#04aa6d;color:#fff}\n"] }]
        }], ctorParameters: function () { return []; } });

class NavbarModule {
}
NavbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.0", ngImport: i0, type: NavbarModule, declarations: [NavbarComponent], imports: [HttpClientModule,
        CommonModule], exports: [NavbarComponent] });
NavbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarModule, imports: [HttpClientModule,
        CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NavbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NavbarComponent
                    ],
                    imports: [
                        HttpClientModule,
                        CommonModule
                    ],
                    exports: [
                        NavbarComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of navbar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NavbarComponent, NavbarModule, NavbarService };
//# sourceMappingURL=navbar.mjs.map
