import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    console.log("🚀 ~ file: theme-switcher.component.ts ~ line 15 ~ ThemeSwitcherComponent ~ ngOnInit ~ this.theme", this.theme)
  }

  public switchTheme(): void {
    if (this.theme.current === 'light') {
        this.theme.current = 'united';
    } else {
        this.theme.current = 'light';
    }
  }

}