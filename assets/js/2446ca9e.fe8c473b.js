"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},s=void 0,l={unversionedId:"Quickstart",id:"Quickstart",title:"Quickstart",description:"Learn the Basics ||",source:"@site/docs/02-Quickstart.md",sourceDirName:".",slug:"/Quickstart",permalink:"/jupisaurus/docs/Quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-Quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/jupisaurus/docs/Introduction"},next:{title:"Tensors",permalink:"/jupisaurus/docs/Tensors"}},i={},d=[{value:"Working with data",id:"working-with-data",level:2},{value:"Creating Models",id:"creating-models",level:2},{value:"Optimizing the Model Parameters",id:"optimizing-the-model-parameters",level:2},{value:"Saving Models",id:"saving-models",level:2},{value:"Loading Models",id:"loading-models",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%matplotlib inline\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Introduction.html"},"Learn the Basics")," ||\n",(0,r.kt)("strong",{parentName:"p"},"Quickstart")," ||\n",(0,r.kt)("a",{parentName:"p",href:"Tensors.html"},"Tensors")," ||\n",(0,r.kt)("a",{parentName:"p",href:"Data.html"},"Datasets & DataLoaders")," ||\n",(0,r.kt)("a",{parentName:"p",href:"transforms_tutorial.html"},"Transforms")," ||\n",(0,r.kt)("a",{parentName:"p",href:"buildmodel_tutorial.html"},"Build Model")," ||\n",(0,r.kt)("a",{parentName:"p",href:"autogradqs_tutorial.html"},"Autograd")," ||\n",(0,r.kt)("a",{parentName:"p",href:"optimization_tutorial.html"},"Optimization")," ||\n",(0,r.kt)("a",{parentName:"p",href:"saveloadrun_tutorial.html"},"Save & Load Model")),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"This section runs through the API for common tasks in machine learning. Refer to the links in each section to dive deeper."),(0,r.kt)("h2",{id:"working-with-data"},"Working with data"),(0,r.kt)("p",null,"PyTorch has two ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/data.html"},"primitives to work with data"),":\n",(0,r.kt)("inlineCode",{parentName:"p"},"torch.utils.data.DataLoader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"torch.utils.data.Dataset"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," stores the samples and their corresponding labels, and ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader")," wraps an iterable around\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import torch\nfrom torch import nn\nfrom torch.utils.data import DataLoader\nfrom torchvision import datasets\nfrom torchvision.transforms import ToTensor\n")),(0,r.kt)("p",null,"PyTorch offers domain-specific libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/text/stable/index.html"},"TorchText"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/vision/stable/index.html"},"TorchVision"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/audio/stable/index.html"},"TorchAudio"),",\nall of which include datasets. For this tutorial, we  will be using a TorchVision dataset."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"torchvision.datasets")," module contains ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," objects for many real-world vision data like\nCIFAR, COCO (",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/vision/stable/datasets.html"},"full list here"),"). In this tutorial, we\nuse the FashionMNIST dataset. Every TorchVision ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," includes two arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"target_transform")," to modify the samples and labels respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Download training data from open datasets.\ntraining_data = datasets.FashionMNIST(\n    root="data",\n    train=True,\n    download=True,\n    transform=ToTensor(),\n)\n\n# Download test data from open datasets.\ntest_data = datasets.FashionMNIST(\n    root="data",\n    train=False,\n    download=True,\n    transform=ToTensor(),\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Downloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/train-images-idx3-ubyte.gz\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/train-images-idx3-ubyte.gz to data/FashionMNIST/raw/train-images-idx3-ubyte.gz\n\n\n100.0%\n\n\nExtracting data/FashionMNIST/raw/train-images-idx3-ubyte.gz to data/FashionMNIST/raw\n\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/train-labels-idx1-ubyte.gz\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/train-labels-idx1-ubyte.gz to data/FashionMNIST/raw/train-labels-idx1-ubyte.gz\n\n\n100.0%\n\n\nExtracting data/FashionMNIST/raw/train-labels-idx1-ubyte.gz to data/FashionMNIST/raw\n\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/t10k-images-idx3-ubyte.gz\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/t10k-images-idx3-ubyte.gz to data/FashionMNIST/raw/t10k-images-idx3-ubyte.gz\n\n\n100.0%\n\n\nExtracting data/FashionMNIST/raw/t10k-images-idx3-ubyte.gz to data/FashionMNIST/raw\n\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/t10k-labels-idx1-ubyte.gz\nDownloading http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/t10k-labels-idx1-ubyte.gz to data/FashionMNIST/raw/t10k-labels-idx1-ubyte.gz\n\n\n100.0%\n\nExtracting data/FashionMNIST/raw/t10k-labels-idx1-ubyte.gz to data/FashionMNIST/raw\n")),(0,r.kt)("p",null,"We pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," as an argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader"),". This wraps an iterable over our dataset, and supports\nautomatic batching, sampling, shuffling and multiprocess data loading. Here we define a batch size of 64, i.e. each element\nin the dataloader iterable will return a batch of 64 features and labels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'batch_size = 64\n\n# Create data loaders.\ntrain_dataloader = DataLoader(training_data, batch_size=batch_size)\ntest_dataloader = DataLoader(test_data, batch_size=batch_size)\n\nfor X, y in test_dataloader:\n    print(f"Shape of X [N, C, H, W]: {X.shape}")\n    print(f"Shape of y: {y.shape} {y.dtype}")\n    break\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Shape of X [N, C, H, W]: torch.Size([64, 1, 28, 28])\nShape of y: torch.Size([64]) torch.int64\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"data_tutorial.html"},"loading data in PyTorch"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-models"},"Creating Models"),(0,r.kt)("p",null,"To define a neural network in PyTorch, we create a class that inherits\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/generated/torch.nn.Module.html"},"nn.Module"),". We define the layers of the network\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__")," function and specify how data will pass through the network in the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward")," function. To accelerate\noperations in the neural network, we move it to the GPU if available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Get cpu or gpu device for training.\ndevice = "cuda" if torch.cuda.is_available() else "mps" if torch.backends.mps.is_available() else "cpu"\nprint(f"Using {device} device")\n\n# Define model\nclass NeuralNetwork(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.flatten = nn.Flatten()\n        self.linear_relu_stack = nn.Sequential(\n            nn.Linear(28*28, 512),\n            nn.ReLU(),\n            nn.Linear(512, 512),\n            nn.ReLU(),\n            nn.Linear(512, 10)\n        )\n\n    def forward(self, x):\n        x = self.flatten(x)\n        logits = self.linear_relu_stack(x)\n        return logits\n\nmodel = NeuralNetwork().to(device)\nprint(model)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Using cpu device\nNeuralNetwork(\n  (flatten): Flatten(start_dim=1, end_dim=-1)\n  (linear_relu_stack): Sequential(\n    (0): Linear(in_features=784, out_features=512, bias=True)\n    (1): ReLU()\n    (2): Linear(in_features=512, out_features=512, bias=True)\n    (3): ReLU()\n    (4): Linear(in_features=512, out_features=10, bias=True)\n  )\n)\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"buildmodel_tutorial.html"},"building neural networks in PyTorch"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"optimizing-the-model-parameters"},"Optimizing the Model Parameters"),(0,r.kt)("p",null,"To train a model, we need a ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/nn.html#loss-functions"},"loss function"),"\nand an ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/optim.html"},"optimizer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"loss_fn = nn.CrossEntropyLoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=1e-3)\n")),(0,r.kt)("p",null,"In a single training loop, the model makes predictions on the training dataset (fed to it in batches), and\nbackpropagates the prediction error to adjust the model's parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def train(dataloader, model, loss_fn, optimizer):\n    size = len(dataloader.dataset)\n    model.train()\n    for batch, (X, y) in enumerate(dataloader):\n        X, y = X.to(device), y.to(device)\n\n        # Compute prediction error\n        pred = model(X)\n        loss = loss_fn(pred, y)\n\n        # Backpropagation\n        optimizer.zero_grad()\n        loss.backward()\n        optimizer.step()\n\n        if batch % 100 == 0:\n            loss, current = loss.item(), batch * len(X)\n            print(f"loss: {loss:>7f}  [{current:>5d}/{size:>5d}]")\n')),(0,r.kt)("p",null,"We also check the model's performance against the test dataset to ensure it is learning."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def test(dataloader, model, loss_fn):\n    size = len(dataloader.dataset)\n    num_batches = len(dataloader)\n    model.eval()\n    test_loss, correct = 0, 0\n    with torch.no_grad():\n        for X, y in dataloader:\n            X, y = X.to(device), y.to(device)\n            pred = model(X)\n            test_loss += loss_fn(pred, y).item()\n            correct += (pred.argmax(1) == y).type(torch.float).sum().item()\n    test_loss /= num_batches\n    correct /= size\n    print(f"Test Error: \\n Accuracy: {(100*correct):>0.1f}%, Avg loss: {test_loss:>8f} \\n")\n')),(0,r.kt)("p",null,"The training process is conducted over several iterations (",(0,r.kt)("em",{parentName:"p"},"epochs"),"). During each epoch, the model learns\nparameters to make better predictions. We print the model's accuracy and loss at each epoch; we'd like to see the\naccuracy increase and the loss decrease with every epoch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'epochs = 5\nfor t in range(epochs):\n    print(f"Epoch {t+1}\\n-------------------------------")\n    train(train_dataloader, model, loss_fn, optimizer)\n    test(test_dataloader, model, loss_fn)\nprint("Done!")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Epoch 1\n-------------------------------\nloss: 2.292992  [    0/60000]\nloss: 2.283021  [ 6400/60000]\nloss: 2.264571  [12800/60000]\nloss: 2.266950  [19200/60000]\nloss: 2.237359  [25600/60000]\nloss: 2.217477  [32000/60000]\nloss: 2.214929  [38400/60000]\nloss: 2.180616  [44800/60000]\nloss: 2.179348  [51200/60000]\nloss: 2.146700  [57600/60000]\nTest Error: \n Accuracy: 46.4%, Avg loss: 2.142143 \n\nEpoch 2\n-------------------------------\nloss: 2.148543  [    0/60000]\nloss: 2.138522  [ 6400/60000]\nloss: 2.076700  [12800/60000]\nloss: 2.099457  [19200/60000]\nloss: 2.041332  [25600/60000]\nloss: 1.989669  [32000/60000]\nloss: 2.003070  [38400/60000]\nloss: 1.925112  [44800/60000]\nloss: 1.932142  [51200/60000]\nloss: 1.851452  [57600/60000]\nTest Error: \n Accuracy: 58.3%, Avg loss: 1.854496 \n\nEpoch 3\n-------------------------------\nloss: 1.886998  [    0/60000]\nloss: 1.856374  [ 6400/60000]\nloss: 1.734103  [12800/60000]\nloss: 1.779169  [19200/60000]\nloss: 1.664163  [25600/60000]\nloss: 1.632862  [32000/60000]\nloss: 1.636577  [38400/60000]\nloss: 1.543409  [44800/60000]\nloss: 1.569252  [51200/60000]\nloss: 1.462865  [57600/60000]\nTest Error: \n Accuracy: 60.3%, Avg loss: 1.485037 \n\nEpoch 4\n-------------------------------\nloss: 1.553598  [    0/60000]\nloss: 1.520435  [ 6400/60000]\nloss: 1.368210  [12800/60000]\nloss: 1.440591  [19200/60000]\nloss: 1.321811  [25600/60000]\nloss: 1.340235  [32000/60000]\nloss: 1.335727  [38400/60000]\nloss: 1.263228  [44800/60000]\nloss: 1.297786  [51200/60000]\nloss: 1.206810  [57600/60000]\nTest Error: \n Accuracy: 62.2%, Avg loss: 1.230078 \n\nEpoch 5\n-------------------------------\nloss: 1.309340  [    0/60000]\nloss: 1.292357  [ 6400/60000]\nloss: 1.122409  [12800/60000]\nloss: 1.230125  [19200/60000]\nloss: 1.108093  [25600/60000]\nloss: 1.151278  [32000/60000]\nloss: 1.157870  [38400/60000]\nloss: 1.091877  [44800/60000]\nloss: 1.131738  [51200/60000]\nloss: 1.059360  [57600/60000]\nTest Error: \n Accuracy: 63.9%, Avg loss: 1.075037 \n\nDone!\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"optimization_tutorial.html"},"Training your model"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"saving-models"},"Saving Models"),(0,r.kt)("p",null,"A common way to save a model is to serialize the internal state dictionary (containing the model parameters)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'torch.save(model.state_dict(), "model.pth")\nprint("Saved PyTorch Model State to model.pth")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Saved PyTorch Model State to model.pth\n")),(0,r.kt)("h2",{id:"loading-models"},"Loading Models"),(0,r.kt)("p",null,"The process for loading a model includes re-creating the model structure and loading\nthe state dictionary into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'model = NeuralNetwork()\nmodel.load_state_dict(torch.load("model.pth"))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<All keys matched successfully>\n")),(0,r.kt)("p",null,"This model can now be used to make predictions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'classes = [\n    "T-shirt/top",\n    "Trouser",\n    "Pullover",\n    "Dress",\n    "Coat",\n    "Sandal",\n    "Shirt",\n    "Sneaker",\n    "Bag",\n    "Ankle boot",\n]\n\nmodel.eval()\nx, y = test_data[0][0], test_data[0][1]\nwith torch.no_grad():\n    pred = model(x)\n    predicted, actual = classes[pred[0].argmax(0)], classes[y]\n    print(f\'Predicted: "{predicted}", Actual: "{actual}"\')\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Predicted: "Ankle boot", Actual: "Ankle boot"\n')),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"saveloadrun_tutorial.html"},"Saving & Loading your model"),"."))}m.isMDXComponent=!0}}]);