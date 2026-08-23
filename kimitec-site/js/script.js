// ==========================================================
// KIMITEC — data & interactions
// ==========================================================

const STAGE_LABELS = {
  "vejetatif":     "Vejetatif Gelişim",
  "ciceklenme":    "Çiçeklenme",
  "meyve-tutumu":  "Meyve Tutumu",
  "irilesme":      "İrileşme & Kalite",
  "stres":         "Stres & Toparlanma"
};

const PRODUCTS = [
  {
    name: "GRENFORCE",
    teaser: "Bor, bakır, demir, mangan, molibden ve çinko içeren zengin mikro besin karışımı.",
    stages: ["vejetatif", "ciceklenme"],
    bullets: [
      "İçeriğindeki bor, bakır, demir, mangan, molibden ve çinko gibi zengin mikro besin elementleri karışımı sayesinde meyve ve sebzelerde eksikliklerin giderilmesini sağlayarak dengeli bir beslenme sunar.",
      "Çinko ve mangan gibi elementler bitkide enzim faaliyetlerini, protein sentezini ve azot metabolizmasını destekleyerek genel bitki sağlığını güçlendirir.",
      "Fotosentez kalitesini geliştirir, bitkinin besin elementlerinden daha etkin yararlanmasına imkan tanır ve verimlilik ile ürün kalitesini artırır.",
      "Meyve ağaçlarında vejetatif gelişimin yoğun olduğu dönemlerde ve özellikle %5-10 çiçek dönemi uygulandığında meyvenin genetik kodunun yazılmasında büyük rol oynar.",
      "Sebzelerde büyüme sezonu boyunca bitkinin iz element ihtiyaçlarını karşılamak ve genel gelişimini desteklemek amacıyla düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "FRUCTON",
    teaser: "Bor ve molibden kombinasyonu ile çiçek tozu canlılığını artırır, döllenmeyi destekler.",
    stages: ["ciceklenme", "meyve-tutumu", "irilesme"],
    bullets: [
      "İçeriğindeki bor ve molibden kombinasyonu ile meyve ve sebzelerde çiçek tozunun canlılığını artırarak döllenmeyi ve meyve tutumunu güçlü bir şekilde destekler.",
      "Hücre bölünmesini ve polen tüpü gelişimini teşvik ederek meyve ve sebzelerde şekil bozukluklarını önler, irileşmeyi ve pazar kalitesini artırır.",
      "Özellikle hasattan 18-20 gün önce uygulandığında iç dolgunluğu yaptırarak rekoltede fark yaratır.",
      "Meyve ağaçlarında çiçeklenme öncesinde, çiçeklenme döneminde ve meyve tutum periyodunda uygulanabilir.",
      "Sebzelerde çiçeklenmeden hemen önceki dönemde, çiçeklenme başlangıcında ve meyve bağlama evresinde düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "BOMBARDIER",
    teaser: "Bitkisel kaynaklı amino asitler ve organik maddeler ile stres koşullarına hızlı direnç.",
    stages: ["vejetatif", "ciceklenme", "meyve-tutumu", "stres"],
    bullets: [
      "İçeriğindeki zengin bitkisel kaynaklı amino asitler ve organik maddeler sayesinde meyve ve sebzelerde stres koşullarına karşı hızlı bir direnç ve toparlanma sağlar.",
      "Bitkinin metabolik faaliyetlerini ve protein sentezini hızlandırarak vejetatif gelişimi, köklenmeyi ve genel verimliliği güçlü bir şekilde destekler.",
      "Diğer tarım ilaçları ve gübrelerle birlikte kullanıldığında yapraktan emilimi artırarak (taşıyıcı etki) uygulanan besinlerin etkinliğini yükseltir.",
      "Meyve ağaçlarında vejetatif büyüme başlangıcında, çiçeklenme öncesinde, meyve tutumunda ve stres koşullarının görüldüğü periyotlarda uygulanabilir.",
      "Sebzelerde şaşırtma anında, gelişimi hızlandırmak ve büyüme sezonu boyunca bitkiyi desteklemek amacıyla düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "TOGGLE XL",
    teaser: "Sıvı deniz yosunu ve alginik asit ile kök gelişimi ve stres direnci.",
    stages: ["vejetatif", "ciceklenme", "meyve-tutumu", "irilesme", "stres"],
    bullets: [
      "İçeriğindeki yüksek kaliteli sıvı deniz yosunu ve alginik asit sayesinde meyve ve sebzelerde kök gelişimini teşvik eder ve stres koşullarına (sıcaklık, kuraklık vb.) karşı direnci artırır.",
      "Doğal bitki gelişim düzenleyicileri ile çiçeklenmeyi, meyve tutumunu ve kalitesini destekleyerek verim kaybını önler.",
      "İçerdiği suda çözünür potasyum ve organik maddelerle meyve ve sebzelerin irileşmesini, renk ve doku kalitesini iyileştirir.",
      "Meyve ağaçlarında vejetatif gelişimin başlangıcında, çiçeklenme öncesinde ve meyve irileşme sürecinde periyodik olarak uygulanabilir.",
      "Sebzelerde fide dikimi sonrasında köklenmeyi hızlandırmak, büyüme sezonu boyunca bitkiyi desteklemek ve stres dönemlerini atlatmak amacıyla düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "TERRA SORB FOLİAR",
    teaser: "%6 serbest amino asit ve %20 organik madde ile don, kuraklık ve sıcaklık stresine direnç.",
    stages: ["vejetatif", "ciceklenme", "meyve-tutumu", "stres"],
    bullets: [
      "Bitkisel menşeli yüksek serbest amino asit (%6) ve organik madde (%20) içeriği sayesinde meyve ve sebzelerde stres koşullarına (don, kuraklık, sıcaklık stresi vb.) karşı hızlı bir direnç ve toparlanma sağlar.",
      "Bitki tarafından doğrudan bünyesine alınan serbest amino asitler, metabolik faaliyetleri ve protein sentezini hızlandırarak bitkinin gelişimini ve verimliliğini maksimum düzeyde destekler.",
      "Diğer tarım ilaçları ve gübrelerle birlikte kullanıldığında yapraktan emilimi ve taşınmayı artırarak (taşıyıcı/sticker etkisi) uygulanan diğer besinlerin etkinliğini yükseltir.",
      "Meyve ağaçlarında vejetatif büyüme başlangıcında, çiçeklenme döneminde, meyve tutumunda ve stres koşullarının görüldüğü kritik periyotlarda güvenle uygulanabilir.",
      "Sebzelerde köklenmeyi hızlandırmak, vejetatif gelişimi hızlandırmak ve meyve bağlama süreçlerinde düzenli aralıklarla yapraktan kullanılabilir."
    ]
  },
  {
    name: "NUTRİMİN",
    teaser: "İkincil ve iz element katkılı organomineral yapı ile dengeli beslenme ve kök gelişimi.",
    stages: ["vejetatif", "ciceklenme", "irilesme"],
    bullets: [
      "İçeriğindeki ikincil ve iz element katkılı katı organomineral yapısı sayesinde meyve ve sebzelerin dengeli beslenmesini sağlayarak kök gelişimini ve genel bitki direncini güçlendirir.",
      "Bitkinin enzim faaliyetlerini ve fotosentez kapasitesini artırarak ürünlerin kalite standartlarını, renk oluşumunu ve pazar değerini doğrudan destekler.",
      "Toprağın verimliliğini artırarak besin elementlerinin alımını kolaylaştırır ve olumsuz çevre koşullarına karşı bitkinin direncini yükseltir.",
      "Meyve ağaçlarında vejetatif büyüme başlangıcında, çiçeklenme öncesi dönemde ve meyve irileşme sürecinde periyodik olarak uygulanabilir.",
      "Sebzelerde fide dikimi ile birlikte, bitkinin gelişim sezonu boyunca iz element ihtiyacının karşılanması gereken kritik dönemlerde düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "NUTRILOP ZnB",
    teaser: "Bor ve çinko içeriği ile çiçek tozu canlılığı, döllenme ve meyve tutumunda maksimum verim.",
    stages: ["ciceklenme", "meyve-tutumu"],
    bullets: [
      "Bor ve çinko içeriği sayesinde meyve ve sebzelerde çiçek tozunun canlılığını artırarak döllenmeyi ve meyve tutum oranını en üst seviyeye çıkarır.",
      "Hücre bölünmesini ve hormon sentezini destekleyerek bitkinin büyüme uçlarının sağlıklı gelişmesini sağlar, şekil bozukluklarını engeller.",
      "Bitkinin mikro element ihtiyaçlarını karşılayarak stres koşullarına karşı direncini yükseltir ve ürün kalitesini doğrudan iyileştirir.",
      "Meyve ağaçlarında çiçek tomurcuklarının belirginleştiği dönemde, çiçeklenme öncesinde ve meyve tutum periyodunda uygulanabilir.",
      "Sebzelerde çiçeklenmeden hemen önceki dönemde, çiçeklenme başlangıcında ve meyve bağlama evresinde düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "NUTRILOP Mg",
    teaser: "Yüksek magnezyum ve nitrat azotu ile klorofil sentezi ve fotosentez verimi.",
    stages: ["vejetatif", "irilesme"],
    bullets: [
      "İçeriğindeki yüksek magnezyum ve nitrat azotu sayesinde klorofil sentezini maksimum düzeyde destekleyerek meyve ve sebzelerde yeşil aksamı ve fotosentez verimini artırır.",
      "Molibden katkısı ile bitkinin azot metabolizmasını optimize eder, yaşlı yapraklarda sararmaları önleyerek sağlıklı ve güçlü bir bitki gelişimi sağlar.",
      "Meyve ve sebzelerin besin maddelerinden etkin bir şekilde yararlanmasına imkan tanır, meyve kalitesini ve genel verimliliği doğrudan destekler.",
      "Meyve ağaçlarında yaprak gelişiminin yoğun olduğu dönemlerde, meyve irileşme sürecinde ve magnezyum noksanlığı gözlenen periyotlarda uygulanabilir.",
      "Sebzelerde hızlı büyüme evresinde, meyve tutumu sonrasında ve yapraklarda fotosentezi engelleyecek sararmalar meydana geldiğinde düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "NUTRILOP BOR",
    teaser: "Bor etanol amin formülasyonu ile çiçek tozu canlılığı ve şekil bozukluklarının önlenmesi.",
    stages: ["ciceklenme", "meyve-tutumu"],
    bullets: [
      "İçeriğindeki bor etanol amin formülasyonu sayesinde meyve ve sebzelerde çiçek tozunun canlılığını artırarak döllenmeyi ve meyve tutumunu güçlü bir şekilde destekler.",
      "Hücre duvarı sentezinde ve şeker taşınımında kritik rol oynayarak meyve ve sebzelerde şekil bozukluklarını önler, ürün kalitesini ve pazar değerini yükseltir.",
      "Bitkinin büyüme uçlarının sağlıklı gelişmesini sağlayarak sürgün gelişimini optimize eder ve verim kayıplarının önüne geçer.",
      "Meyve ağaçlarında çiçek tomurcuklarının belirginleştiği dönemde, çiçeklenme döneminde ve hasat sonrası uygulanabilir.",
      "Sebzelerde çiçeklenmeden hemen önceki dönemde, çiçeklenme başlangıcında ve meyve tutumunu artırmak amacıyla düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "FERTİZYME -SP",
    teaser: "Zengin enzim ve organik bileşenlerle kök gelişimini tetikler, toprak biyolojisini canlandırır.",
    stages: ["vejetatif"],
    bullets: [
      "İçeriğindeki zengin enzimler ve organik bileşenler sayesinde meyve ve sebzelerde kök gelişimini muazzam seviyede tetikleyerek bitkinin topraktaki besin elementlerini daha etkin kullanmasını sağlar.",
      "Toprak biyolojisini canlandırarak bitki kök bölgesindeki yararlı mikroorganizma faaliyetlerini artırır, böylece daha güçlü ve sağlıklı bir bitki yapısı oluşumuna destek olur.",
      "Çevresel ve toprak kaynaklı stres faktörlerine karşı bitkinin direncini yükselterek, köklerin besin emilim kapasitesini maksimize eder ve genel verimliliği artırır.",
      "Meyve fidanlarında güçlü kök yapısı oluşturmak için düzenli olarak kullanılabilir.",
      "Sebzelerde fide dikimi ile birlikte kök gelişimini teşvik etmek amacıyla, büyüme sezonu boyunca bitkide güçsüzlük görüldüğü dönemlerde düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "CYTOKIN PLUS",
    teaser: "Alginik asit ve organik maddelerle hücre bölünmesi, meyve irileşmesi ve gelişim hızlanır.",
    stages: ["ciceklenme", "meyve-tutumu", "irilesme", "stres"],
    bullets: [
      "İçeriğindeki alginik asit ve bitkisel kaynaklı organik maddeler sayesinde meyve ve sebzelerde hücre bölünmesini teşvik ederek meyve irileşmesini ve bitki gelişimini hızlandırır.",
      "Bitki hormonlarını dengeleyici etkisi ile meyve ve sebzelerin çiçeklenme sonrası meyve bağlama kapasitesini artırarak verim kaybını minimize eder.",
      "Stres koşullarına karşı bitkinin doğal direncini güçlendirir, meyve ve sebzelerde daha homojen, kaliteli ve pazar değeri yüksek ürünler oluşmasına yardımcı olur.",
      "Meyve ağaçlarında çiçeklenme sonrasında meyve tutumunu desteklemek amacıyla ve meyve irileşme dönemlerinde periyodik olarak uygulanabilir.",
      "Sebzelerde çiçeklenme başlangıcından itibaren meyve gelişimi süresince, bitkinin büyüme enerjisini korumak için düzenli aralıklarla kullanılabilir."
    ]
  },
  {
    name: "BLACKJAK SC",
    teaser: "Yüksek hümik ve fulvik asit ile toprak yapısını düzenler, besin alımını maksimize eder.",
    stages: ["vejetatif", "stres"],
    bullets: [
      "Yüksek oranda hümik ve fulvik asit içeren özel formülasyonu ile meyve ve sebzelerde toprağın yapısını düzenler, toprağa bağlanmış şekilde bulunan besin elementlerinin bitki tarafından alımını maksimum düzeye çıkarır.",
      "Kök gelişimini güçlü bir şekilde teşvik ederek meyve ve sebzelerin topraktan su ve besin elementi çekme kapasitesini artırır, bitkiyi daha dayanıklı hale getirir.",
      "Stres koşullarına (kuraklık, tuzluluk, pH dengesizliği vb.) karşı bitkinin direncini artırarak verim kaybını önler ve ürün kalitesinin iyileşmesine yardımcı olur.",
      "Meyve ve sebzelerde her periyotta düzenli aralıklar ile kullanılabilir. Düşük pH değeri ile diğer gübreler ile kullanıldığında hızlı alınım ve taşınma sağlar."
    ]
  },
  {
    name: "ALAMIN ZN",
    teaser: "Yüksek çinko ve serbest amino asit içeriği ile enzim aktivitesi ve köklenme desteği.",
    stages: ["vejetatif", "ciceklenme"],
    bullets: [
      "Yüksek çinko ve serbest amino asit içeriği sayesinde meyve ve sebzelerde enzim aktivitesini hızlandırarak bitki gelişimini ve köklenmeyi güçlü bir şekilde destekler.",
      "Çinkonun bitki içi hormon sentezindeki rolüyle çiçeklenmeyi teşvik eder ve mikro element noksanlığından kaynaklanan yaprak küçülmeleri ile gelişim geriliklerini önler.",
      "Organik madde desteği ile besin elementlerinin alımını kolaylaştırarak meyve ve sebzelerin kalitesini, verimini ve hastalıklara karşı direncini artırır.",
      "Meyve ağaçlarında vejetatif büyümenin başladığı ilkbahar döneminde, çiçeklenme öncesinde ve sürgün gelişim periyotlarında uygulanabilir.",
      "Sebzelerde fide dikiminden hemen sonra şoku atlatmak, gelişimi hızlandırmak ve çiçeklenme öncesi dönemde düzenli olarak kullanılabilir."
    ]
  },
  {
    name: "ALAMIN CA",
    teaser: "Kalsiyum ve bor kombinasyonu ile hücre yapısı, meyve kalitesi ve raf ömrü artışı.",
    stages: ["meyve-tutumu", "irilesme"],
    bullets: [
      "İçeriğindeki kalsiyum ve bor kombinasyonu, meyve ve sebzelerde hücre yapısını güçlendirerek meyve kalitesini, dayanıklılığını ve raf ömrünü doğrudan artırır.",
      "Organik madde ve serbest amino asit desteği, kalsiyumun bitki bünyesinde hızlı taşınmasını sağlayarak meyve çatlamalarını ve fizyolojik bozuklukları minimize eder.",
      "Bitkinin çiçeklenme ve meyve bağlama dönemlerinde ihtiyaç duyduğu kalsiyumu sağlayarak, daha sağlıklı ve pazar değeri yüksek ürünler elde edilmesine yardımcı olur.",
      "Meyve ağaçlarında meyve tutumu sonrası gelişme döneminden hasat öncesine kadar kalsiyum ihtiyacının yüksek olduğu evrelerde periyodik olarak kullanılabilir.",
      "Sebzelerde bağlama döneminden itibaren sebze irileşme süreci boyunca ihtiyaç duyulan dönemlerde düzenli olarak uygulanabilir."
    ]
  }
];

// ---------------- Nav toggle ----------------
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

// ---------------- Product grid ----------------
const productGrid = document.getElementById("productGrid");

function renderProducts(){
  productGrid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product-card" id="product-${i}">
      <button class="product-card__head" aria-expanded="false" data-index="${i}">
        <span>
          <h3 class="product-card__name">${p.name}</h3>
          <p class="product-card__teaser">${p.teaser}</p>
        </span>
        <span class="product-card__toggle" aria-hidden="true">+</span>
      </button>
      <div class="product-card__body">
        <ul class="product-card__list">
          ${p.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");

  productGrid.querySelectorAll(".product-card__head").forEach(head => {
    head.addEventListener("click", () => {
      const card = head.closest(".product-card");
      const isOpen = card.classList.toggle("is-open");
      head.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
}
renderProducts();

// ---------------- Growth stage tabs ----------------
const stageTabs = document.getElementById("stageTabs");
const stagePanel = document.getElementById("stagePanel");

function renderStage(stageKey){
  const matches = PRODUCTS.filter(p => p.stages.includes(stageKey));
  stagePanel.innerHTML = matches.map(p => `
    <div class="stage-chip">
      <h4>${p.name}</h4>
      <p>${p.teaser}</p>
    </div>
  `).join("") || `<p style="color:rgba(255,255,255,.6)">Bu evre için ürün bulunamadı.</p>`;
}

stageTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".stage-tab");
  if(!btn) return;
  stageTabs.querySelectorAll(".stage-tab").forEach(t => {
    t.classList.remove("is-active");
    t.setAttribute("aria-selected", "false");
  });
  btn.classList.add("is-active");
  btn.setAttribute("aria-selected", "true");
  renderStage(btn.dataset.stage);
});

renderStage("vejetatif");

// ---------------- Misc ----------------
document.getElementById("year").textContent = new Date().getFullYear();

const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector("input");
  input.value = "";
  input.placeholder = "Kaydınız alındı, teşekkürler!";
});
