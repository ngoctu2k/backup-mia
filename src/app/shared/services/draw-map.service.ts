import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';
import { json, geoMercator, geoPath, select } from 'd3';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class DrawMapService {
    constructor(private router: Router) {
    }

    drawNation(svg, jsonLink: string, router: Router) {
        return json(jsonLink).then((mapData: any) => {
            const features = mapData.features;
            const projection = geoMercator().fitSize([568, 650], mapData);
            const gMap = svg.append('g')
                .attr('class', 'map');
            const path = geoPath().projection(projection);
            // Draw nation
            svg.selectAll('g')
                .append('svg:text')
                .classed('label', true)
                .attr('x', (d: any) => {
                    return path.centroid(d)[0];
                })
                .attr('y', (d: any) => {
                    return path.centroid(d)[1];
                })
                .attr('font-size', '8px')
                .attr('fill', '#000000')
                .attr('transform', 'translate(-20,-10)')
                .text((d: any) => {
                    return 'Quần đảo Hoàng Sa';
                });
            gMap.selectAll('path')
                .data(features)
                .enter()
                .append('path')
                .attr('id_region', (d: any) => d.properties.id_region)
                .attr('name', (d: any) => d.properties.name_vi)
                .attr('stroke-width', 1)
                .attr('stroke', '#F7F6F2')
                .attr('fill', '#77875E')
                .attr('d', path);

            // fill đồng bằng sông cửu long (region id = 1)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '1';
                })
                .attr('fill', '#377C9A')
                .attr('stroke-width', 1)
                .attr('stroke', '#377C9A')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="1"]').style('opacity', '1').style('fill', '#377C9A').style('stroke', '#377C9A').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    // d3.selectAll('path');
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="1"]').style('opacity', '1').style('fill', '#377C9A').style('stroke', '#377C9A');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/dong-bang-song-cuu-long', { state: { breadcrumb: 'Đồng bằng sông cửu Long' } });
                    // alert('Đồng bằng sông cửu long');
                });

            // fill Đồng bằng sông hồng (region id = 2)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '2';
                })
                .attr('fill', '#3E8780')
                .attr('stroke-width', 1)
                .attr('stroke', '#3E8780')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="2"]').style('opacity', '1').style('fill', '#3E8780').style('stroke', '#3E8780').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="2"]').style('opacity', '1').style('fill', '#3E8780').style('stroke', '#3E8780');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/dong-bang-song-hong', { state: { breadcrumb: 'Đồng bằng sông Hồng' } });
                });

            // fill Đông Bắc Bộ (region id = 3)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '3';
                })
                .attr('fill', '#77875E')
                .attr('stroke-width', 1)
                .attr('stroke', '#77875E')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="3"]').style('opacity', '1').style('fill', '#77875E').style('stroke', '#77875E').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="3"]').style('fill', '#77875E').style('stroke', '#77875E');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/dong-bac-bo', { state: { breadcrumb: 'Đông Bắc Bộ' } });
                });

            // fill Đông Nam Bộ (region id = 4)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '4';
                })
                .attr('fill', '#9B642D')
                .attr('stroke-width', 1)
                .attr('stroke', '#9B642D')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="4"]').style('opacity', '1').style('fill', '#9B642D').style('stroke', '#9B642D').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="4"]').style('fill', '#9B642D').style('stroke', '#9B642D');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/dong-nam-bo', { state: { breadcrumb: 'Đông Nam Bộ' } });
                });

            // fill Bắc Trung Bộ (region id = 5)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '5';
                })
                .attr('fill', '#BB9954')
                .attr('stroke-width', 1)
                .attr('stroke', '#BB9954')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="5"]').style('opacity', '1').style('fill', '#BB9954').style('stroke', '#BB9954').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="5"]').style('fill', '#BB9954').style('stroke', '#BB9954');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/bac-trung-bo', { state: { breadcrumb: 'Bắc Trung Bộ' } });
                });

            // fill Nam Trung Bộ (region id = 6)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '6';
                })
                .attr('fill', '#AB565E')
                .attr('stroke-width', 1)
                .attr('stroke', '#AB565E')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="6"]').style('opacity', '1').style('fill', '#AB565E').style('stroke', '#AB565E').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="6"]').style('fill', '#AB565E').style('stroke', '#AB565E');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/nam-trung-bo', { state: { breadcrumb: 'Nam Trung Bộ' } });
                });

            // fill Tây Bắc Bộ (region id = 7)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '7';
                })
                .attr('fill', '#434557')
                .attr('stroke-width', 1)
                .attr('stroke', '#434557')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
                    d3.selectAll('path[id_region="7"]').style('opacity', '1').style('fill', '#434557').style('stroke', '#434557').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="7"]').style('fill', '#434557').style('stroke', '#434557');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/tay-bac-bo', { state: { breadcrumb: 'Tây Bắc Bộ' } });
                });

            // fill Tây nguyên (region id = 8)
            gMap.selectAll('path')
                .filter(function (d) {
                    return d3.select(this).attr('id_region') === '8';
                })
                .attr('fill', '#544264')
                .attr('stroke-width', 1)
                .attr('stroke', '#544264')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.15');
                    d3.selectAll('path[id_region="8"]').style('opacity', '1').style('fill', '#544264').style('stroke', '#544264').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.selectAll('path[id_region="8"]').style('fill', '#544264').style('stroke', '#544264');
                })
                .on('click', function () {
                    router.navigateByUrl('/pages/fruit/tay-nguyen', { state: { breadcrumb: 'Tây Nguyên' } });
                });

            // draw hoang sa

        });


    }

    drawRegion(svg, jsonLink, regionId: string, regionName, router: Router) {
        return json(jsonLink).then(function (mapData: any) {
            const features = mapData.features;
            const projection = geoMercator().fitSize([568, 650], mapData);
            const gMap = svg.append('g')
                .attr('class', 'map');
            const path = geoPath().projection(projection);

            // Draw region
            gMap.selectAll('path')
                .data(features.filter((d) => d.properties.id_region === regionId))
                .enter()
                .append('g')
                .attr('id', (d: any) => d.properties.id_1)
                .append('path')
                .attr('slug', (d: any) => d.properties.slug)
                .attr('name', (d: any) => d.properties.name)
                .attr('stroke-width', 1)
                .attr('stroke', '#F7F6F2')
                .attr('fill', '#77875E')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.15');
                    d3.select(this).style('opacity', '1').style('fill', '#77875E').style('stroke', '#77875E').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.select(this).style('opacity', '1').style('fill', '#77875E').style('stroke', '#F7F6F2').style('stroke-opacity', '1');
                })
                .on('click', function (d) {
                    router.navigateByUrl(`/pages/fruit/${regionName}/${d3.select(this).attr('slug')}`,
                        { state: { breadcrumb: d3.select(this).attr('name') } });
                })
                .attr('d', path);

            gMap.selectAll('g')
                .append('svg:text')
                .classed('label', true)
                .attr('x', (d: any) => {
                    return path.centroid(d)[0];
                })
                .attr('y', (d: any) => {
                    return path.centroid(d)[1];
                })
                .attr('xlink:href', (d: any) => d.properties.id_1)
                .attr('font-size', '8px')
                .attr('fill', '#000000')
                .attr('transform', 'translate(-20,-10)')
                .text((d: any) => {
                    return d.properties.name;
                });

            gMap.selectAll('g').filter(function (d) {
                return d3.select(this).attr('id_region') === '8';
            });
            // gMap.selectAll('path')

            // .attr('fill', '#377C9A')
            // .attr('stroke-width', 1)
            // .attr('stroke', '#377C9A')
            // .on('mouseover', function (d) {
            //     d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.19');
            //     d3.selectAll('path[id_region="1"]').style('opacity', '1').style('fill', '#377C9A').style('stroke', '#377C9A').style('stroke-opacity', '1');
            // })
            // .on('mouseout', function () {
            //     // d3.selectAll('path');
            //     d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
            //     d3.selectAll('path[id_region="1"]').style('opacity', '1').style('fill', '#377C9A').style('stroke', '#377C9A');
            // })
            // .on('click', function () {
            //     router.navigateByUrl('/pages/fruit/dong-bang-song-cuu-long', { state: { breadcrumb: 'Đồng bằng sông cửu Long' } });
            //     // alert('Đồng bằng sông cửu long');
            // });
        });

    }

    drawProvince(svg, jsonLink) {
        return json(jsonLink).then(function (mapData: any) {
            const features = mapData.features;
            const projection = geoMercator().fitSize([568, 650], mapData);
            const gMap = svg.append('g')
                .attr('class', 'map');
            const path = geoPath().projection(projection);

            // Draw nation
            gMap.selectAll('path')
                .data(features)
                .enter()
                .append('g')
                .attr('id', (d: any) => d.properties.id_1)
                .append('path')
                .attr('slug', (d: any) => d.properties.slug)
                .attr('name', (d: any) => d.properties.name)
                .attr('stroke-width', 1)
                .attr('stroke', '#F7F6F2')
                .attr('fill', '#77875E')
                .on('mouseover', function (d) {
                    d3.selectAll('path').style('opacity', '0.6').style('stroke-opacity', '0.15');
                    d3.select(this).style('opacity', '1').style('fill', '#544264').style('stroke', '#544264').style('stroke-opacity', '1');
                })
                .on('mouseout', function () {
                    d3.selectAll('path').style('opacity', '1').style('stroke-opacity', '1');
                    d3.select(this).style('opacity', '1').style('fill', '#77875E').style('stroke', '#F7F6F2').style('stroke-opacity', '1');
                })
                .attr('d', path);
            gMap.selectAll('text');

            gMap.selectAll('g')
                .append('svg:text')
                .classed('label', true)
                .attr('x', (d: any) => {
                    return path.centroid(d)[0];
                })
                .attr('y', (d: any) => {
                    return path.centroid(d)[1];
                })
                .attr('xlink:href', (d: any) => d.properties.id_1)
                .attr('font-size', '10px')
                .attr('fill', '#000000')
                .attr('transform', 'translate(-20,-10)')
                .text((d: any) => {
                    return d.properties.NAME_3;
                });

        });
    }
}
