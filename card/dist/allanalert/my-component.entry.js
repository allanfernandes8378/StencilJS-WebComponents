import { r as registerInstance, h } from './index-33a381a3.js';

const myComponentCss = "div{display:block;background-color:#DFE4E9;font-size:14px;padding:20px 40px;font-family:sans-serif;margin:15px 10px}div.square{display:block;background-color:#DFE4E9;font-size:14px;padding:20px 40px;font-family:sans-serif;display:block;position:relative}div.rounded{display:block;background-color:#DFE4E9;font-size:14px;padding:20px 40px;border-radius:10px;font-family:sans-serif;display:block;position:relative}h4{font-family:sans-serif;font-weight:400;font-size:18px}h4.title{font-family:sans-serif;font-weight:400;font-size:18px}h4.notitle{display:none}h4.centrealigntitle{font-family:sans-serif;font-weight:400;font-size:18px;text-align:center}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque magna id felis scelerisque suscipit. Vestibulum sit amet turpis id ipsum sodales rutrum quis vitae elit. Suspendisse potenti. Nulla aliquet auctor metus, sed tempus risus ornare quis. Phasellus vitae interdum nibh. Etiam urna nunc, faucibus consectetur gravida ut, efficitur nec sapien. Ut varius libero imperdiet arcu cursus ultricies. Nullam vehicula, nibh sed consequat pharetra, dolor nisl rhoncus magna, vitae feugiat diam urna quis nunc. Duis scelerisque enim eget velit varius, a suscipit ipsum convallis. Praesent pretium, leo non euismod sollicitudin, libero magna mattis tortor, nec congue nulla mauris sit amet elit. Suspendisse potenti.";
    this.corners = "square";
    this.heading = "title";
  }
  render() {
    return h("div", { class: this.corners }, h("h4", { class: this.heading }, "Announcement Title"), h("p", null, this.text));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
