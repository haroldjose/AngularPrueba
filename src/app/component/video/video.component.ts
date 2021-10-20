import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos=[
    {
      video:'FlrO70emDF0'
    },
    {
      video:'8M-2r-rrkHM'
    },
    {
      video:'vgebOt3UF20'
    },
    {
      video:'_BP1lY2bhVU'
    },
    {
      video:'0TGrtYH3dQU'
    },
    {
      video:'b9Yq1Z1Z80I'
    },
    {
      video:'doxKprRaerg'
    },
    {
      video:'-02OovFk-bc'
    },
    {
      video:'F1ZaPjRymi0'
    },
    {
      video:'nUUyY5U2LQ8'
    },
    {
      video:'elyIMjU4-Lk'
    },
    {
      video:'V7ztrvOuA74'
    },
    {
      video:'l3miZbsuLLY'
    },
    {
      video:'gyzH92D3_bM'
    },
    {
      video:''
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    let apiLoaded = false;
    if (!apiLoaded) {
     
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}
