import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { IBreadCrumb } from './breadcrumb.interface';
import { Province } from './province.data';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: IBreadCrumb[];
  public titlePage;
  private subcription: Subscription;
  bannerImage;
  breabChildLabel;
  provinceData = Province;
  regionsParams;
  provinceParams;
  keysLength;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((ev) => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    // no routeConfig is avalailable we are on the root path
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    let labelRegion;
    let labelProvince;
    // remove id dynamic in breadcrumb
    // console.log('path', path)
    // console.log('label', label)
    const lastRoutePart = path.split('/').pop();
    const replaceId = path.split('/');
    const isDynamicRoute = lastRoutePart.startsWith(':');

    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      if (route.firstChild) {
        path = path.replace(replaceId[0], route.snapshot.params.regions);
        path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      } else {
        path = path.replace(replaceId[0], route.snapshot.params.regions);
        path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      }
      const province = this.provinceData.find(o => o.slug === route.snapshot.params.province);

      const labelBreab = route.snapshot.params.regions;
      // console.log(path);
      if (labelBreab && !province) {
        path = path.replace(replaceId[0], route.snapshot.params.regions);
        path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
        switch (labelBreab) {
          case 'dong-bang-song-cuu-long':
            labelRegion = 'Đồng bằng sông Cửu Long';
            break;
          case 'dong-bang-song-hong':
            labelRegion = 'Đồng bằng sông Hồng';
            break;
          case 'dong-bac-bo':
            labelRegion = 'Đông Bắc Bộ';
            break;
          case 'tay-bac-bo':
            labelRegion = 'Tây Bắc Bộ';
            break;
          case 'bac-trung-bo':
            labelRegion = 'Bắc Trung Bộ';
            break;
          case 'nam-trung-bo':
            labelRegion = 'Nam Trung Bộ';
            break;
          case 'tay-nguyen':
            labelRegion = 'Tây Nguyên';
            break;
          case 'dong-nam-bo':
            labelRegion = 'Đông Nam Bộ';
            break;
          default:
            labelRegion = route.snapshot.params[paramName];
            break;
        }
      } else if (province && labelBreab) {
        if (route.snapshot.params.province) {
          path = path.replace(replaceId[0], route.snapshot.params.province);
          path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
        }
        switch (labelBreab) {
          case 'dong-bang-song-cuu-long':
            labelRegion = 'Đồng bằng sông Cửu Long';
            break;
          case 'dong-bang-song-hong':
            labelRegion = 'Đồng bằng sông Hồng';
            break;
          case 'dong-bac-bo':
            labelRegion = 'Đông Bắc Bộ';
            break;
          case 'tay-bac-bo':
            labelRegion = 'Tây Bắc Bộ';
            break;
          case 'bac-trung-bo':
            labelRegion = 'Bắc Trung Bộ';
            break;
          case 'nam-trung-bo':
            labelRegion = 'Nam Trung Bộ';
            break;
          case 'tay-nguyen':
            labelRegion = 'Tây Nguyên';
            break;
          case 'dong-nam-bo':
            labelRegion = 'Đông Nam Bộ';
            break;
          default:
            labelRegion = route.snapshot.params[paramName];
            break;
        }
        labelProvince = province.name;
      } else {
        this.router.navigateByUrl('/pages/fruit');
      }
    }

    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label,
      url: `fruit/${nextUrl}`,
    };
    // console.log(breadcrumbs);
    // route with non-empty label
    let newBreadcrumbs = [{
      label: 'Việt Nam',
      url: `fruit`,
    },
    {
      label: labelRegion,
      url: `fruit/${route.snapshot.params.regions}`,
    },
    {
      label: labelProvince,
      url: `fruit/${nextUrl}`,
    }];

    if (route.snapshot.params.regions || route.snapshot.params.province) {
      newBreadcrumbs = [{
        label: 'Việt Nam',
        url: `fruit`,
      },
      {
        label: labelRegion,
        url: `fruit/${route.snapshot.params.regions}`,
      },
      {
        label: labelProvince,
        url: `fruit/${nextUrl}`,
      }];
    } else {
      newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    }


    if (route.firstChild) {
      // rescursive build bread

      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
