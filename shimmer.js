(function (){
	var tests = [
		{
			//testName: 'events',
			test:     'CustomEvent' in window && typeof window.CustomEvent === 'function' && 'addEventListener' in window,
			patchSrc: 'shim.customEvent.js'
		},
		{
			//testName: 'classList',
			test:     'classList' in document.documentElement,
			patchSrc: 'shim.classList.js',
		},
		{
			//testName: 'requestAnimationFrame',
			test:     typeof window.requestAnimationFrame === 'function',
			patchSrc: 'shim.requestAnimationFrame.js',
		},
		{
			//testName: 'closest&matches',
			test:     typeof document.documentElement.closest === 'function' && typeof document.documentElement.matches === 'function',
			patchSrc: 'shim.closest.js',
		},
		{
			//testName: 'base64',
			test:     typeof window.atob === 'function' && typeof window.btoa === 'function',
			patchSrc: 'shim.base64.js',
		},
		{
			//testName: 'scrollBehavior',
			test:     'scrollBehavior' in document.documentElement.style,
			patchSrc: 'shim.scrollBehavior.js',
		},
		{
			//testName: 'Object.assign',
			test:     typeof Object.assign == 'function',
			patchSrc: 'shim.Object.assign.js',
		},
		{
			//testName: 'remove',
			test:     typeof Element.prototype.remove == 'function',
			patchSrc: 'shim.remove.js',
		},
		{
			//testName: 'dataset',
			test:     !(!document.documentElement.dataset && (!Object.getOwnPropertyDescriptor(Element.prototype, 'dataset') || !Object.getOwnPropertyDescriptor(Element.prototype, 'dataset').get )),
			patchSrc: 'shim.dataset.js',
		},
		{
			//testName: 'forEach on NodeList',
			test:     NodeList.prototype.forEach,
			patchSrc: 'shim.forEach.js',
		},
		{
			//testName: IntersectionObserver,
			test:     typeof IntersectionObserver == 'function',
			patchSrc: 'shim.IntersectionObserver.js',
		},
		{
			//testName: MutationObserver,
			test:     typeof MutationObserver == 'function',
			patchSrc: 'shim.MutationObserver.js',
		}
	];

	for(var i = tests.length; i--;)
	{
		var srcPath = getCurrentScriptPath();

		if( tests[i].test === false )
			loadScript( srcPath + tests[i].patchSrc );
	}

	function loadScript(url)
	{
		var script = document.createElement('script')
		script.type = 'text/javascript';

		var patch = url.split('/').pop();

		if( script.readyState ) // Fucking IE
		{
			script.onreadystatechange = function(){
				if( script.readyState == 'loaded' || script.readyState == 'complete' )
				{
					script.onreadystatechange = null;
					console.log('Patch loaded: ' + patch);
				}
			};
		}
		else // Normal browsers
		{
			script.onload = function(){
				console.log('Patch loaded: ' + patch);
			};
		}

		script.src = url;
		document.head.appendChild(script);
	}

	function getCurrentScriptPath()
	{
		if( document.currentScript )
			var path = document.currentScript.src;
		else
		{
			var path = document.getElementsByTagName('script');
			path = path[path.length-1].src;
		}
		return path.substring( 0, path.lastIndexOf('/') ) + '/';
	};
})();