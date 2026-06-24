(function () {
  const script = document.currentScript;
  const rootHref = script && script.src
    ? new URL("../../../../", script.src).href
    : new URL("./", document.baseURI).href;

  function absolutize(items) {
    return items.map((item) => {
      const next = { ...item };
      if (next.url) {
        next.url = new URL(next.url, rootHref).href;
      }
      return next;
    });
  }

  window.DocInsight = window.DocInsight || {};
  window.DocInsight.searchIndex = {
    items: absolutize([{"kind":"topic","title":"Cache command","url":"commands/cache-command.html"},{"kind":"topic","title":"DPM CLI Commands","url":"commands/commands.html"},{"kind":"topic","title":"Config command","url":"commands/config-command.html"},{"kind":"topic","title":"Delete command","url":"commands/delete-command.html"},{"kind":"topic","title":"Help command","url":"commands/help-command.html"},{"kind":"topic","title":"Info command","url":"commands/info-command.html"},{"kind":"topic","title":"Install command","url":"commands/install-command.html"},{"kind":"topic","title":"List command","url":"commands/list-command.html"},{"kind":"topic","title":"Pack command","url":"commands/pack-command.html"},{"kind":"topic","title":"Prepare command","url":"commands/prepare-command.html"},{"kind":"topic","title":"Push command","url":"commands/push-command.html"},{"kind":"topic","title":"Restore command","url":"commands/restore-command.html"},{"kind":"topic","title":"Sbom command","url":"commands/sbom-command.html"},{"kind":"topic","title":"Scan command","url":"commands/scan-command.html"},{"kind":"topic","title":"SetApiKey command","url":"commands/setapikey-command.html"},{"kind":"topic","title":"Sign Command","url":"commands/sign-command.html"},{"kind":"topic","title":"Sources command","url":"commands/sources-command.html"},{"kind":"topic","title":"Spec command","url":"commands/spec-command.html"},{"kind":"topic","title":"Trust command","url":"commands/trust-command.html"},{"kind":"topic","title":"Uninstall command","url":"commands/uninstall-command.html"},{"kind":"topic","title":"Update command","url":"commands/update-command.html"},{"kind":"topic","title":"Verify Command","url":"commands/verify-command.html"},{"kind":"topic","title":"Why command","url":"commands/why-command.html"},{"kind":"topic","title":"Supported Compiler Versions","url":"compiler-versions.html"},{"kind":"topic","title":"Bundled Dependencies","url":"concepts/bundled-dependencies.html"},{"kind":"topic","title":"DPM Config Files","url":"concepts/config-files.html"},{"kind":"topic","title":"How does DPM work","url":"concepts/how-it-works.html"},{"kind":"topic","title":"Concepts","url":"concepts/index.html"},{"kind":"topic","title":"Package Cache","url":"concepts/package-cache.html"},{"kind":"topic","title":"Package Dependencies","url":"concepts/package-dependencies.html"},{"kind":"topic","title":"Package Signing","url":"concepts/package-signing.html"},{"kind":"topic","title":"Package Sources","url":"concepts/package-sources.html"},{"kind":"topic","title":"Package versioning","url":"concepts/package-versioning.html"},{"kind":"topic","title":"Version Range","url":"concepts/version-range.html"},{"kind":"topic","title":"Contributing","url":"contributing.html"},{"kind":"topic","title":"Consuming Packages","url":"getting-started/consuming-packages.html"},{"kind":"topic","title":"Using DPM in Continuous Integration","url":"getting-started/continuous-integration.html"},{"kind":"topic","title":"Creating Packages","url":"getting-started/creating-packages.html"},{"kind":"topic","title":"Git Registry Packages","url":"getting-started/git-registry-packages.html"},{"kind":"topic","title":"IDE Integration","url":"getting-started/ide-integration.html"},{"kind":"topic","title":"installing","url":"getting-started/installing.html"},{"kind":"topic","title":"Known Issues","url":"getting-started/known-issues.html"},{"kind":"topic","title":"Publishing Packages","url":"getting-started/publishing-packages.html"},{"kind":"topic","title":"Introduction","url":"index.html"},{"kind":"topic","title":"Supported Platforms","url":"platforms.html"}])
  };
})();
