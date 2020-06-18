<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Paguernon extends Theme
{
    // Access plugin events in this class

	public function onTwigSiteVariables()
    {
        if ($this->isAdmin()) {
            $this->grav['assets']->add('theme://css/admin.css');
        }
    }
}
