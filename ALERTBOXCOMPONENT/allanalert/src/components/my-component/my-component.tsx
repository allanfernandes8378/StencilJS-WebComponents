import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque magna id felis scelerisque suscipit. Vestibulum sit amet turpis id ipsum sodales rutrum quis vitae elit. Suspendisse potenti. Nulla aliquet auctor metus, sed tempus risus ornare quis. Phasellus vitae interdum nibh. Etiam urna nunc, faucibus consectetur gravida ut, efficitur nec sapien. Ut varius libero imperdiet arcu cursus ultricies. Nullam vehicula, nibh sed consequat pharetra, dolor nisl rhoncus magna, vitae feugiat diam urna quis nunc. Duis scelerisque enim eget velit varius, a suscipit ipsum convallis. Praesent pretium, leo non euismod sollicitudin, libero magna mattis tortor, nec congue nulla mauris sit amet elit. Suspendisse potenti.";
  @Prop() corners:"rounded" | "square" = "square";
  @Prop() heading:"title" |"centrealigntitle"| "notitle" = "title";
  @Prop() icon:"iconpresent" | "iconabsent" = "iconpresent"

  render() {
    return <div class={this.corners}>
      <img class={this.icon} src="https://us.123rf.com/450wm/vectorshowstudio/vectorshowstudio1608/vectorshowstudio160800556/61463260-attention-icon-danger-button-and-attention-warning-sign-attention-security-alarm-symbol-danger-warni.jpg?ver=6" alt="icon"></img>
      <h4 class={this.heading}>Announcement Title</h4>
      <p >{this.text}</p>
    </div>;
  }
}
